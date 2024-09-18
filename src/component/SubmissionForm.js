import React, {useState} from "react";

const SubmissionForm = () => {
   const [formData, setFormData] = useState({
    firstNama: '',
    lastName:'',
    email:'',
    contact: '',
    gender: '',
    selectedOption: '',
    subjects: '',
    resume: null,
    url: '',
    about: '',
   });

   const handleChange = (e) => {
    const{ name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
   };
   const handlFileChange = (e) => {
    setFormData((prevData) => ({
        ...prevData,
        resume: e.target.files[0], 
      }));
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      selectedOption: '',
      subjects: '',
      resume: null,
      url: '',
      about: '',
    });
  };

   return(
    <form onSubmit={handleSubmit}>
        <div> 
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>
        </div>
        <div> 
            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>
        </div>
        <div> 
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
        </div>
        <div> 
            <label>
                contact:
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
            </label>
        </div>
        <div> 
            <label>
                Gender:
                <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            </label>
        </div>
        <div>
        <label>
          Selected Option:
          <input type="text" name="selectedOption" value={formData.selectedOption} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Subjects:
          <input type="text" name="subjects" value={formData.subjects} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Resume:
          <input type="file" name="resume" onChange={handlFileChange} required />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input type="url" name="url" value={formData.url} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          About:
          <textarea name="about" value={formData.about} onChange={handleChange}></textarea>
        </label>
      </div>
        <button type="submit">Submit</button>
    </form>
   );
};

export default SubmissionForm;