import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup,Validators, NgModelGroup } from '@angular/forms';


interface AttendanceRecord {
  utNumber: string;
  studentName: string;
  subject: string;
  attendance: string; // Can be "Present" or "Absent"
  date: string; // Formatting can be adjusted based on needs
}

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})

export class AttendanceComponent {
  attendanceRecords: AttendanceRecord[] = []; // Array to store attendance records
  utNumber: string = '';
  studentName: string = '';
  subject: string = '';
  attendance: string = 'Present'; // Default value
  date: string = new Date().toISOString().substring(0, 10); // Default to today's date
  isEditMode: boolean = false;
  currentIndex: number | null = null;

  // Function to add or update attendance record
//   saveAttendance() {
//     if (this.isEditMode && this.currentIndex !== null) {
//       // Update existing attendance record
//       this.attendanceRecords[this.currentIndex] = {
//         utNumber: this.utNumber,
//         studentName: this.studentName,
//         subject: this.subject,
//         attendance: this.attendance,
//         date: this.date
//       };
//     } else {
//       // Add new attendance record
//       this.attendanceRecords.push({
//         utNumber: this.utNumber,
//         studentName: this.studentName,
//         subject: this.subject,
//         attendance: this.attendance,
//         date: this.date
//       });
//     }

//     // Clear input fields
//     this.clearFields();
//   }

//   // Function to populate fields for editing
//   editAttendance(index: number) {
//     const recordToEdit = this.attendanceRecords[index];
//     this.utNumber = recordToEdit.utNumber;
//     this.studentName = recordToEdit.studentName;
//     this.subject = recordToEdit.subject;
//     this.attendance = recordToEdit.attendance;
//     this.date = recordToEdit.date;
//     this.isEditMode = true;
//     this.currentIndex = index;
//   }

//   // Function to delete attendance record
//   deleteAttendance(index: number) {
//     this.attendanceRecords.splice(index, 1);
//   }

//   // Function to clear input fields
//   clearFields() {
//     this.utNumber = '';
//     this.studentName = '';
//     this.subject = '';
//     this.attendance = 'Present';
//     this.date = new Date().toISOString().substring(0, 10);
//     this.isEditMode = false;
//     this.currentIndex = null;
//   }

//   // Function to reset the form
//   resetForm() {
//     this.clearFields();
//   }
// }



saveAttendance() {
  // Check for uniqueness of student number
  const existingRecord = this.attendanceRecords.find(record => record.utNumber === this.utNumber);
  if (existingRecord && !this.isEditMode) {
    alert('Student Number must be unique. This number already exists.');
    return;
  }

  if (this.isEditMode && this.currentIndex !== null) {
    // Update existing attendance record
    this.attendanceRecords[this.currentIndex] = {
      utNumber: this.utNumber,
      studentName: this.studentName,
      subject: this.subject,
      attendance: this.attendance,
      date: this.date
    };
  } else {
    // Add new attendance record
    this.attendanceRecords.push({
      utNumber: this.utNumber,
      studentName: this.studentName,
      subject: this.subject,
      attendance: this.attendance,
      date: this.date
    });
  }

  // Clear input fields
  this.clearFields();
}

// Function to populate fields for editing
editAttendance(index: number) {
  const recordToEdit = this.attendanceRecords[index];
  this.utNumber = recordToEdit.utNumber;
  this.studentName = recordToEdit.studentName;
  this.subject = recordToEdit.subject;
  this.attendance = recordToEdit.attendance;
  this.date = recordToEdit.date;
  this.isEditMode = true;
  this.currentIndex = index;
}

// Function to delete attendance record
deleteAttendance(index: number) {
  this.attendanceRecords.splice(index, 1);
}

// Function to clear input fields
clearFields() {
  this.utNumber = '';
  this.studentName = '';
  this.subject = '';
  this.attendance = 'Present';
  this.date = new Date().toISOString().substring(0, 10);
  this.isEditMode = false;
  this.currentIndex = null;
}

// Function to reset the form
resetForm() {
  this.clearFields();
}
}

