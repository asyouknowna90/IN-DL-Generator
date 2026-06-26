// Indiana Driver's License Generator
class DriverLicense {
    constructor() {
        this.firstName = 'Lana';
        this.lastName = 'Molly West';
        this.dateOfBirth = '';
        this.height = '';
        this.weight = '';
        this.dlNumber = '';
        this.issueDate = '';
        this.expirationDate = '';
        this.address = '';
        this.city = '';
        this.zipCode = '';
        
        this.initializeEventListeners();
        this.updatePreview();
    }
    
    initializeEventListeners() {
        document.getElementById('generateBtn').addEventListener('click', () => this.generateLicense());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetForm());
        
        // Real-time preview updates
        document.getElementById('firstName').addEventListener('input', (e) => {
            this.firstName = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('lastName').addEventListener('input', (e) => {
            this.lastName = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('dob').addEventListener('change', (e) => {
            this.dateOfBirth = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('height').addEventListener('input', (e) => {
            this.height = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('weight').addEventListener('input', (e) => {
            this.weight = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('dlNumber').addEventListener('input', (e) => {
            this.dlNumber = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('issueDate').addEventListener('change', (e) => {
            this.issueDate = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('expirationDate').addEventListener('change', (e) => {
            this.expirationDate = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('address').addEventListener('input', (e) => {
            this.address = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('city').addEventListener('input', (e) => {
            this.city = e.target.value;
            this.updatePreview();
        });
        
        document.getElementById('zipCode').addEventListener('input', (e) => {
            this.zipCode = e.target.value;
            this.updatePreview();
        });
    }
    
    formatDate(dateString) {
        if (!dateString) return '--/--/----';
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }
    
    formatHeight(inches) {
        if (!inches) return 'N/A';
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}"`;
    }
    
    validateLicense() {
        if (!this.firstName.trim()) {
            alert('Please enter a first name');
            return false;
        }
        if (!this.lastName.trim()) {
            alert('Please enter a last name');
            return false;
        }
        if (!this.dateOfBirth) {
            alert('Please enter a date of birth');
            return false;
        }
        if (!this.dlNumber.trim()) {
            alert('Please enter a DL number');
            return false;
        }
        if (!this.issueDate) {
            alert('Please enter an issue date');
            return false;
        }
        if (!this.expirationDate) {
            alert('Please enter an expiration date');
            return false;
        }
        return true;
    }
    
    updatePreview() {
        document.getElementById('previewName').textContent = 
            `${this.firstName} ${this.lastName}`;
        document.getElementById('previewDLNumber').textContent = 
            this.dlNumber || 'N/A';
        document.getElementById('previewDOB').textContent = 
            this.formatDate(this.dateOfBirth);
        document.getElementById('previewHeight').textContent = 
            this.formatHeight(this.height);
        document.getElementById('previewWeight').textContent = 
            this.weight ? `${this.weight} lbs` : 'N/A';
        document.getElementById('previewIssueDate').textContent = 
            this.formatDate(this.issueDate);
        document.getElementById('previewExpirationDate').textContent = 
            this.formatDate(this.expirationDate);
        document.getElementById('previewAddress').textContent = 
            this.address || 'N/A';
        document.getElementById('previewCityState').textContent = 
            `${this.city}, IN ${this.zipCode}`;
    }
    
    generateLicense() {
        if (!this.validateLicense()) {
            return;
        }
        
        // License generated successfully
        const licenseData = {
            firstName: this.firstName,
            lastName: this.lastName,
            dateOfBirth: this.dateOfBirth,
            height: this.height,
            weight: this.weight,
            dlNumber: this.dlNumber,
            issueDate: this.issueDate,
            expirationDate: this.expirationDate,
            address: this.address,
            city: this.city,
            zipCode: this.zipCode
        };
        
        console.log('License Generated:', licenseData);
        alert('Indiana Driver\'s License generated successfully!\n\nName: ' + this.firstName + ' ' + this.lastName + '\nDL Number: ' + this.dlNumber);
    }
    
    resetForm() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('dob').value = '';
        document.getElementById('height').value = '';
        document.getElementById('weight').value = '';
        document.getElementById('dlNumber').value = '';
        document.getElementById('issueDate').value = '';
        document.getElementById('expirationDate').value = '';
        document.getElementById('address').value = '';
        document.getElementById('city').value = '';
        document.getElementById('zipCode').value = '';
        
        this.firstName = '';
        this.lastName = '';
        this.dateOfBirth = '';
        this.height = '';
        this.weight = '';
        this.dlNumber = '';
        this.issueDate = '';
        this.expirationDate = '';
        this.address = '';
        this.city = '';
        this.zipCode = '';
        
        this.updatePreview();
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new DriverLicense();
});
