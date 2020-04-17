import React, { Component } from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import { Jumbotron, Col, Input, InputGroup, InputGroupAddon, FormGroup, Label, Button, Fade, FormFeedback, Container, Card } from 'reactstrap';
import axios from 'axios';


class ExRend extends Component {
  constructor(props){
    super(props);
    this.state={
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
      ExcelRenderer(fileObj, (err, resp) => {
        
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
             
            jsonObj[head[j]] = rowData[j];
            }
        resArr.push(jsonObj);            
        }
        
         let respo = JSON.stringify(resArr);
         console.log(respo)
        
        if(err){
          console.log(err);            
        }
        else{
          this.setState({
            dataLoaded: true,
            cols: resp.cols,
            rows: resp.rows
          });
        }

        axios.post("http://192.168.0.9:8099/resource/controller/saveAll",
        respo)
              
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function (error){
          console.log(error)
            
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
        <div>
        </div>
        <Container>
        <form>
          <FormGroup row>
            <Label for="exampleFile" xs={6} sm={4} lg={2} size="lg">To insert multiple resources</Label>          
            <Col xs={4} sm={8} lg={10}>                                                     
              <InputGroup>
                <InputGroupAddon >
                  {/* <Button color="info" style={{color: "black", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Browse&hellip;</Button> */}
                  <Button color="info" style={{color: "black", zIndex: 0}} onClick={this.openFileBrowser.bind(this)}><i className="cui-file"></i> Upload&hellip;</Button>
                  <input type="file" hidden onChange={this.fileHandler.bind(this)} ref={this.fileInput} onClick={(event)=> { event.target.value = null }} />                                
                </InputGroupAddon>
                <Input type="text" className="form-control" value={this.state.uploadedFileName} readOnly invalid={this.state.isFormInvalid} />                                              
                <FormFeedback>    
                  <Fade in={this.state.isFormInvalid} tag="h6" style={{fontStyle: "italic"}}>
                    Please select a .xlsx file only !
                  </Fade>                                                                
                </FormFeedback>
              </InputGroup>     
            </Col>                                                   
          </FormGroup>   
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

