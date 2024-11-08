declare var html2pdf: any;

// Function to generate the resume output from the form data
function GenerateResume() {
  const name = (document.getElementById('txtName') as HTMLInputElement).value;
  const email = (document.getElementById('txtEmail') as HTMLInputElement).value;
  const phone = (document.getElementById('txtPhone') as HTMLInputElement).value;
  const about = (document.getElementById('txtabout') as HTMLTextAreaElement).value;

  const degreeTitle = (document.getElementById('txtDegreeTitle') as HTMLInputElement).value;
  const institution = (document.getElementById('txtclg') as HTMLInputElement).value;
  const eduStartDate = (document.getElementById('txteduStartDate') as HTMLInputElement).value;
  const eduEndDate = (document.getElementById('txteduEndDate') as HTMLInputElement).value;
  const educationDesc = (document.getElementById('txtEducationDescription') as HTMLTextAreaElement).value;

  const skills = (document.getElementById('txtSkill') as HTMLTextAreaElement).value;

  const companyName = (document.getElementById('txtCompanyName') as HTMLInputElement).value;
  const exStartDate = (document.getElementById('txtexStartDate') as HTMLInputElement).value;
  const exEndDate = (document.getElementById('txtexEndDate') as HTMLInputElement).value;
  const position = (document.getElementById('txtPosition') as HTMLInputElement).value;
  const experienceDesc = (document.getElementById('txtExperienceDescription') as HTMLTextAreaElement).value;
  
// Construct the resume output HTML with additional classes for styling
const resumeOutput = `
  <div class="resume-header">
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
  </div>

  <div class="section">
    <h3>About Me</h3>
    <p>${about}</p>
  </div>

  <div class="section">
    <h3>Education & Qualifications</h3>
    <p><strong>Degree:</strong> ${degreeTitle}</p>
    <p><strong>Institution:</strong> ${institution}</p>
    <p><strong>Duration:</strong> ${eduStartDate} - ${eduEndDate}</p>
    <p>${educationDesc}</p>
  </div>

  <div class="section">
    <h3>Professional Skills</h3>
    <p>${skills}</p>
  </div>

  <div class="section">
    <h3>Professional Experience</h3>
    <p><strong>Company:</strong> ${companyName}</p>
    <p><strong>Position:</strong> ${position}</p>
    <p><strong>Duration:</strong> ${exStartDate} - ${exEndDate}</p>
    <p>${experienceDesc}</p>
  </div>
`;


  const resumeOutputElement = document.getElementById('resume-output');
  if (resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeOutput;
  }
}

// Function to download the resume as a PDF, assuming html2pdf is loaded globally
function downloadPDF() {
  const resumeElement = document.getElementById('resume-output');
  if (resumeElement) {
    const options = {
      margin: 1,
      filename: 'Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Directly call html2pdf assuming it's available globally
    html2pdf().set(options).from(resumeElement).save();
  }
}

// Attach functions to the buttons
document.getElementById('generateResumeButton')?.addEventListener('click', GenerateResume);
document.getElementById('downloadResumeButton')?.addEventListener('click', downloadPDF);
