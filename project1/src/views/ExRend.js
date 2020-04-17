import React, { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import axios from 'axios';
import Added from './Added'
import LoadingLogo from '../components/LoadingLogo';
import Failure from './Failure';


class ExRend extends Component {

  constructor(props){
    super(props);
    this.state={
      add:false,
      load:false,
      noadd:false,
      isOpen: false,
      dataLoaded: false,
      isFormInvalid: false,
      rows: null,
      cols: null
    }
    this.fileHandler = this.fileHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.openFileBrowser = this.openFileBrowser.bind(this);
    this.renderFile = this.renderFile.bind(this);
    this.openNewPage = this.openNewPage.bind(this);
    this.fileInput = React.createRef();
  }

  renderFile = (fileObj) => {
      //just pass the fileObj as parameter
      ExcelRenderer(fileObj,(err, resp) => {
        
        var resArr = [];      
        // var head = ['S.No', 'Grand Total','Resource Name', 'Enterprize ID', 'Project Manager',
        // 'Project Name','Sub Project','Level',  'Primary Skill','Work Location',
        // 'Onsite / Offshore','Roll Start Date','Abacus Roll Off Date',
        // 'Proposed End Date','Groups','Abacus Project',
        // 'Billable / Non Billable','LCR','Gender',  'Comments'];
        // console.log('head ', resp.rows);
        var head = resp.rows[0];
        for (var i = 1 ; i < resp.rows.length; i++) {
          var jsonObj = {};
            var rowData = resp.rows[i];
            for (var j = 0 ; j < rowData.length; j++) {
             this.setState({
               blankRows:false
             })
            jsonObj[head[j]] = rowData[j];
            }
        resArr.push(jsonObj);            
        }
        console.log(resArr)

        //  let respo = JSON.stringify(resArr);
        //  console.log(respo)
        
        let done = this;
        let notadded = this;
        this.setState({load:true})

        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows,
          });
        }

        axios.post("http://192.168.0.9:8099/resource/saveAll",
        resArr)
              
        .then(function(response) {
            console.log(response.data);
            // alert("All resources have been added")
            done.setState({
              add:true,
              load:false,
            })
        })
        .catch(function (error){
          console.log(error)
          //  alert("NOPE") 
          notadded.setState({
            noadd:true,
            load:false
          })
      })
      }); 
  }


  fileHandler = (event) => {    
    if(event.target.files.length){
      let fileObj = event.target.files[0];
      let fileName = fileObj.name;

      
      //check for file extension and pass only if it is .xlsx and display error message otherwise
      if(fileName.slice(fileName.lastIndexOf('.')+1) === "xlsx"){
        this.setState({
          uploadedFileName: fileName,
          isFormInvalid: false
        });
        this.renderFile(fileObj)
      }    
      else{
        this.setState({
          isFormInvalid: true,
          uploadedFileName: ""
        })
      }
    }               
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  openFileBrowser = () => {
    this.fileInput.current.click();
}

  openNewPage = (chosenItem) => {
    const url = chosenItem === "github" ? "https://github.com/ashishd751/react-excel-renderer" : "https://medium.com/@ashishd751/render-and-display-excel-sheets-on-webpage-using-react-js-af785a5db6a7";
    window.open(url, '_blank');
  }

  render() {
    return (
      <div>
        <br/>
        <div>
        </div>
        <Container>
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg" style={{fontFamily:'arial', fontSize:"14px"}}>To upload multiple resources:</Label>   
            <br/>       
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="info" style={{color: "black", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button>
                  <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} style={{"padding":"10px"}} />            
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} onChange={(e) => {e.target.value = null}}  />
                </InputGroupAddon>   
                {this.state.add ? <div><Added/></div> : <div></div>}
                {this.state.noadd ? <div><Failure/></div> : <div></div>}
                {this.state.load ? <div><LoadingLogo/></div> : <div></div>}                                           
                <FormFeedback> 
                {this.state.isFormInvalid ? <div>Please select a .xlsx file only !</div> : <div></div>}   
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>  
          <br/> 
        </form>

        {this.state.dataLoaded && 
        <div>
          <Card body outline color="secondary" className="restrict-card">
            
              {/* <OutTable data={this.state.rows} columns={this.state.cols} tableClassName="ExcelTable2007" tableHeaderRowClass="heading" /> */}
            
          </Card>  
        </div>}
        </Container>
      </div>
    );
  }
}

export default ExRend;

