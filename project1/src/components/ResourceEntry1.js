import React,{Component} from 'react';
import {Field,reduxForm,reset} from 'redux-form';
import {MenuItem
,TextField,Select,
FormControl,InputLabel,Button
} from '@material-ui/core';
import axios from 'axios';
import Success from './Success';
import LoadingLogo from './LoadingLogo';
import Errors from './Errors';
import ExRend from '../views/ExRend';

const afterSubmit = (result,dispatch) =>
dispatch(reset('EntryForm'))

const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
  ) => (
      <TextField
        required
        hintText={label}
        label={label}
        errorText={touched && error}
        {...input}
        {...custom}
      />
    );
    const renderCommentTextField = (
      { input, label, meta: { touched, error }, ...custom },
    ) => (
        <TextField
          hintText={label}
          label={label}
          errorText={touched && error}
          {...input}
          {...custom}
        />
      );
    const renderDateField = (
      { input, label, meta: { touched, error }, ...custom },
    ) => (
        <TextField
          type="date"
          required
          //hintText={label}
          InputLabelProps={{shrink:true}}
          label={label}
          errorText={touched && error}
          {...input}
          {...custom}
        />
      );
  
    const renderSelectField = ({
      input,
      label,
      meta: { touched, error },
      children,
      ...custom
    }) => (
      <FormControl>
        <InputLabel>{label}</InputLabel>
      <Select required
      label={label}
     
        errorText={touched && error}
        {...input}
        children={children}
        {...custom}
      />
      </FormControl>
    )

      const parentDiv={
        display:"flex",
        // paddingLeft:"10%"
      }
      const projectDiv={
        //paddingLeft:"200px",
        width:"100%"
      }
      
      const personalDiv={
        paddingLeft:"2.5p%",
        width: "-webkit-fill-available"
      }
      let EntryForm = props => {
        const { handleSubmit,handleChange, pristine, reset, submitting,isEnabled } = props;
       
        return (
          <form style={{paddingLeft:"120px"}} onSubmit={handleSubmit} enableReinitialize={true}>
            <div style={parentDiv}>
          <div style={personalDiv}>
            <p style={{fontWeight:'bold',fontSize:"18px"}}>Personal Details</p>
            <div style={{display:"flex",paddingBottom:"8px"}}>
              <Field
                name="name"
                style={{width:"55%"}}
                onChange={handleChange}
                component={renderTextField}
                label="Name"
              /> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Field
              name="level"
              component={renderSelectField}
              label="Level"
              onChange={handleChange}
              value="SE"
              style={{width:"100px"}}
            >
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="TL">TL</MenuItem>
              <MenuItem value="SSE">SSE</MenuItem>
              <MenuItem value="SE">SE</MenuItem>
              <MenuItem value="ASE">ASE</MenuItem>
            </Field>
            </div>
          <div  style={{display:"flex",paddingBottom:"8px"}}>
          <Field
                style={{width:"75%"}}
                name="primaryskill"
                component={renderTextField}
                onChange={handleChange}
                label="Primary Skill"
              /> 
          </div>
          <div  style={{display:"flex",paddingBottom:"8px"}}>
          <Field
            name="employeeid"
            type="number"
            component={renderTextField}
            onChange={handleChange}
            label="Employee Id"
            style={{width:"35%"}}
            /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field
                name="enterpriseid"
                component={renderTextField}
                onChange={handleChange}
                label="Enterprise ID"
                style={{width:"35%"}}
              /> 
              
          </div>
          <div  style={{display:"flex",paddingBottom:"8px"}}>
          <Field
              name="gender"
              component={renderSelectField}
              label="Gender"
              onChange={handleChange}
              value="male"
              style={{width:"220px"}}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Field>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Field
            name="dateofjoining"
            onChange={handleChange}
            component={renderDateField}
            label="Date of Joining"
            style={{width:"35%"}}
            /> 
          </div>
          <div  style={{display:"flex",paddingBottom:"8px"}}>
          <Field
              name="onsiteoffshore"
              component={renderSelectField}
              onChange={handleChange}
              label="Onsite/Offshore"
              value=""
              style={{width:"220px"}}
            >
              <MenuItem value="Onsite">Onsite</MenuItem>
              <MenuItem value="Offshore">Offshore</MenuItem>
            </Field>
          </div>
          <div>
          <Field
            name="comments"
            style={{width:"100%"}}
            onChange={handleChange}
            component={renderCommentTextField}
            label="Comments"
            style={{width:"75%", paddingTop:"60px"}}
            /> 
          </div>
          </div>
         
      
          <div style={projectDiv}>
              <div style={personalDiv}>
            <p style={{fontWeight:'bold',fontSize:"18px"}}>Project Details</p>
          <div  style={{display:"flex",paddingBottom:"8px",width: "-webkit-fill-available"}}>
          <Field
                name="projectname"
                onChange={handleChange}
                component={renderTextField}
                label="Project Name"
                style={{width:"47%"}}
              />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Field
              name="groupe"
              component={renderSelectField}
              onChange={handleChange}
              label="Group"
              value=""
              style={{width:"140px"}}
            >
              <MenuItem value="HD">HD</MenuItem>
              {/* <MenuItem value="">Offshore</MenuItem> */}
            </Field>
          </div>
          <div style={{display:"flex",paddingBottom:"8px"}}>
          <Field
                name="projectmanager"
                onChange={handleChange}
                component={renderTextField}
                label="Project Manager"
                style={{width:"47%"}}
              />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field
              name="worklocation"
              onChange={handleChange}
              component={renderSelectField}
              label="WorkLocation"
              value=""
              style={{width:"140px"}}
            >
              <MenuItem value="HDC1">HDC1</MenuItem>
              <MenuItem value="HDC2">HDC2</MenuItem>
              <MenuItem value="HDC3">HDC3</MenuItem>
              <MenuItem value="HDC4">HDC4</MenuItem>
              <MenuItem value="HDC5">HDC5</MenuItem>
            </Field>
          </div>
          <div style={{display:"flex",paddingBottom:"8px"}}>
            <Field
            name="rollstartdate"
            onChange={handleChange}
            component={renderDateField}
            label="Roll Start Date"
            style={{width:"35%"}}
            />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Field
            name="abacusrolloffdate"
            component={renderDateField}
            onChange={handleChange}
            label="Abacus Roll Off Date"
            style={{width:"35%"}}
            /> 
          </div>
          <div style={{display:"flex",paddingBottom:"8px"}}>
          <Field
                name="subproject"
                component={renderTextField}
                onChange={handleChange}
                label="Sub Project"
                style={{width:"35%"}}
              />    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Field
                name="abacusproject"
                component={renderTextField}
                label="Abacus Project"
                onChange={handleChange}
                style={{width:"35%"}}
              /> 
          </div>
          <div>
          <Field
                name="billablestate"
                component={renderSelectField}
                label="Billable State"
                onChange={handleChange}
                style={{width:"220px"}}
              >
              <MenuItem value="Billable">Billable</MenuItem>
              <MenuItem value="Not Billable">Not Billable</MenuItem>
              </Field>  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Field
            name="proposedenddate"
            component={renderDateField}
            label="Proposed End Date"
            onChange={handleChange}
            style={{width:"35%"}}
            /> 
          </div>
          
         <p style={{color:'red',fontSize:"13px"}}>* All fields are mandatory</p>
         <div>
           {/* <p>To insert multiple resources</p> */}
           <ExRend/>
         </div>
         
          </div>
          </div>
          </div>
          <br/>
          <div>
            <Button color="primary"  variant="contained" 
          type="submit" disabled={pristine || submitting}>Submit
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="primary" variant="contained" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </Button>
          </div>
        </form>
        );
      };
      
      EntryForm = reduxForm({
        form: 'EntryForm',
        onSubmitSuccess:afterSubmit,
      })(EntryForm)

      class ResourceEntry extends Component{
        constructor(props){
            super(props)
            this.state={
              employeeid:'',
              name:'',
              level:'',
              primaryskill:'',
              enterpriseid:'',
              gender:'',
              dateofjoining:'',
              onsiteoffshore:'',
              comments:'',
              projectname:'',
              groupe:'',
              projectmanager:'',
              worklocation:'',
              rollstartdate:'',
              abacusrolloffdate:'',
              subproject:'',
              abacusproject:'',
              billablestate:'',
              proposedenddate:'',
              err:false ,
              succ:false,
              loading:false,
              res:'',  
            }
        }
        handleChange=(event)=>{
            this.setState({[event.target.name]:event.target.value,
              err:false,
              succ:false
            })
          }

          handleSubmit = (e) => {  
            
            let success=this; 
            let prblm=this ;
            let content=this;
            let contents=this;
            let res=this;
            this.setState({loading:true})

            axios.post("http://192.168.0.9:8099/resource/save",
            
            {employeeid:this.state.employeeid,
              name:this.state.name,
              level:this.state.level,
              primaryskill:this.state.primaryskill,
              enterpriseid:this.state.enterpriseid,
              gender:this.state.gender,
              dateofjoining:this.state.dateofjoining,
              onsiteoffshore:this.state.onsiteoffshore,
              comments:this.state.comments,
              projectname:this.state.projectname,
              groupe:this.state.groupe,
              projectmanager:this.state.projectmanager,
              worklocation:this.state.worklocation,
              rollstartdate:this.state.rollstartdate,
              abacusrolloffdate:this.state.abacusrolloffdate,
              subproject:this.state.subproject,
              abacusproject:this.state.abacusproject,
              billablestate:this.state.billablestate,
              proposedenddate:this.state.proposedenddate })
            
              
            .then(function(response) {
                console.log(response.data);
                // res = response.data
                console.log(res)
             if(response!=null){
               content.setState({loading:false})
              success.setState({succ:true})
             }
            
                
            })
            .catch(function (error){
              // console.log(error.data);
              res = error.data;
              console.log(res);
              if(error.response){
                contents.setState({loading:false})
                prblm.setState({err:true})
              }
            
          })

      }

        render(){
            return(
                <div>
                     {this.state.loading ? <div><LoadingLogo/></div> : <div/>}
                    {this.state.succ ? <div><Success/></div> : <div/>}
                    {this.state.err ? <div><Errors/></div> : <div/>}
                    <EntryForm onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                </div>
            )
        }
      }
      export default ResourceEntry;