import React,{Component} from 'react';
import './FormProfile.scss';
// import Upload from './../../../../assets/img/upload.png';
import rightArrow from './../../../../assets/img/rightArrow.png';
class Step3 extends Component {
    state = {
        file: '',
      imagePreviewUrl: ''
    }  
    
    _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        localStorage.setItem('image',this.state.imagePreviewUrl)
      }
    
      _handleImageChange = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }
        localStorage.setItem('image',this.state.imagePreviewUrl);
        reader.readAsDataURL(file)
      }
    
    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl}  alt =""/>);
        }
        const imagePreview = imagePreviewUrl ?  $imagePreview :   <p className="profile gray-color">Upload profile picture</p>
        return (
            <div>
            <div className="coverInfo">
              <div className = "Form2">
                 <div className="enter1">
                     <h4>Enter your Info</h4>
                 </div>
                 <div className="group-inline">
                     <input type="name"
                             name = "fullname"
                          className="coverFormInput form-control"
                           placeholder="Enter your full name" 
                           value={this.props.values.fullname}
                           onChange={this.props.handleChange} 
                           />
                             <div> 
                              {this.props.errors && <div id="feedback">{this.props.errors.fullname}</div>}
                    </div>
                 </div>
         
                 <div className="groupGender">
                     <p className="selectGender gray-color">Select gender</p>
                     <input id ="male" type="radio" name="gender" value={this.props.values.gender} onChange = {this.props.handleChange}/>
                     <label className="drinkcard-cc male" htmlFor="male"></label>
                             
                     <input id="female" type="radio" name="gender" value={this.props.values.gender} onChange = {this.props.handleChange}/> 
                         
                     <label className="drinkcard-cc female" htmlFor="female"></label>
                    
                 </div>
                 <div className="groupUpload">
                    <input type="file" onChange={this._handleImageChange} className = "bg-input" />

                     <button className="toggleButton" type="submit" onClick={this._handleSubmit}></button>
                   
                 </div>
                 <div className="imgPreview">
                        { imagePreview}
                        </div>
         
                 <div className="rightArrow1">
                     <button type= "submit" className="rightArrBtn" >
                         <img className="rightArrowImg" src={rightArrow} alt=""/>
                     </button>
                 </div>
                 </div>
         </div>
         </div>
         )
        }
    }
export default Step3;