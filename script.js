var _a, _b;
// Function to generate the resume output from the form data
function GenerateResume() {
    var name = document.getElementById('txtName').value;
    var email = document.getElementById('txtEmail').value;
    var phone = document.getElementById('txtPhone').value;
    var about = document.getElementById('txtabout').value;
    var degreeTitle = document.getElementById('txtDegreeTitle').value;
    var institution = document.getElementById('txtclg').value;
    var eduStartDate = document.getElementById('txteduStartDate').value;
    var eduEndDate = document.getElementById('txteduEndDate').value;
    var educationDesc = document.getElementById('txtEducationDescription').value;
    var skills = document.getElementById('txtSkill').value;
    var companyName = document.getElementById('txtCompanyName').value;
    var exStartDate = document.getElementById('txtexStartDate').value;
    var exEndDate = document.getElementById('txtexEndDate').value;
    var position = document.getElementById('txtPosition').value;
    var experienceDesc = document.getElementById('txtExperienceDescription').value;
    // Construct the resume output HTML with additional classes for styling
    var resumeOutput = "\n  <div class=\"resume-header\">\n    <h2>".concat(name, "</h2>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n  </div>\n\n  <div class=\"section\">\n    <h3>About Me</h3>\n    <p>").concat(about, "</p>\n  </div>\n\n  <div class=\"section\">\n    <h3>Education & Qualifications</h3>\n    <p><strong>Degree:</strong> ").concat(degreeTitle, "</p>\n    <p><strong>Institution:</strong> ").concat(institution, "</p>\n    <p><strong>Duration:</strong> ").concat(eduStartDate, " - ").concat(eduEndDate, "</p>\n    <p>").concat(educationDesc, "</p>\n  </div>\n\n  <div class=\"section\">\n    <h3>Professional Skills</h3>\n    <p>").concat(skills, "</p>\n  </div>\n\n  <div class=\"section\">\n    <h3>Professional Experience</h3>\n    <p><strong>Company:</strong> ").concat(companyName, "</p>\n    <p><strong>Position:</strong> ").concat(position, "</p>\n    <p><strong>Duration:</strong> ").concat(exStartDate, " - ").concat(exEndDate, "</p>\n    <p>").concat(experienceDesc, "</p>\n  </div>\n");
    var resumeOutputElement = document.getElementById('resume-output');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
}
// Function to download the resume as a PDF, assuming html2pdf is loaded globally
function downloadPDF() {
    var resumeElement = document.getElementById('resume-output');
    if (resumeElement) {
        var options = {
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
(_a = document.getElementById('generateResumeButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', GenerateResume);
(_b = document.getElementById('downloadResumeButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', downloadPDF);
