import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { txns } from '../bank';

@Component({
  selector: 'app-recordtable',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './recordtable.component.html',
  styleUrl: './recordtable.component.css'
})
export class RecordtableComponent implements OnInit {
 

selectedDate?:string;
transactions: any[] = [];
filteredTransactions: any[] = [];

 ngOnInit(): void {
 this.transactions = txns;
  this.filteredTransactions = [...this.transactions];
  }


  filterDate() {
  if (!this.selectedDate) return;
  let formattedDate = new Date(this.selectedDate).toISOString().slice(0, 10);

  this.filteredTransactions = this.transactions.filter((txn: any) =>
    txn.date === formattedDate
  );
}
   sortByAmount() {
  this.filteredTransactions = [...this.filteredTransactions].sort(
    (a, b) => a.amount - b.amount
  );
}




}