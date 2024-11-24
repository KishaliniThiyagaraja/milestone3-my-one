import { Component } from '@angular/core';


interface ExamMark {
  studentNumber: string;
  studentName: string;
  subject: string;
  marks: number;
}

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrl: './marks.component.css'
})
export class MarksComponent {
  marks: ExamMark[] = []; // Array to store marks
  studentNumber: string = '';
  studentName: string = '';
  subject: string = '';
  marksInput: number | null = null;
  isEditMode: boolean = false;
  currentIndex: number | null = null;

  // Function to add or update marks
  saveMarks() {
    if (this.isEditMode && this.currentIndex !== null) {
      // Update existing marks
      this.marks[this.currentIndex] = {
        studentNumber: this.studentNumber,
        studentName: this.studentName,
        subject: this.subject,
        marks: this.marksInput!
      };
    } else {
      // Add new marks
      this.marks.push({
        studentNumber: this.studentNumber,
        studentName: this.studentName,
        subject: this.subject,
        marks: this.marksInput!
      });
    }

    // Clear input fields
    this.clearFields();
  }

  // Function to populate fields for editing
  editMarks(index: number) {
    const markToEdit = this.marks[index];
    this.studentNumber = markToEdit.studentNumber;
    this.studentName = markToEdit.studentName;
    this.subject = markToEdit.subject;
    this.marksInput = markToEdit.marks;
    this.isEditMode = true;
    this.currentIndex = index;
  }

  // Function to delete marks
  deleteMarks(index: number) {
    this.marks.splice(index, 1);
  }

  // Function to clear input fields
  clearFields() {
    this.studentNumber = '';
    this.studentName = '';
    this.subject = '';
    this.marksInput = null;
    this.isEditMode = false;
    this.currentIndex = null;
  }

  // Function to reset form
  resetForm() {
    this.clearFields();
  }
}