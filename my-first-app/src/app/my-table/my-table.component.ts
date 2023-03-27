import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  public dataSource = new MatTableDataSource([
    {time: '20-02-2022T12:00:33.000Z', transactionId: '6421a1ed2f711e7613a01b9b', changedField: 'note', userId: 'aneta.stankovska@yahoo.com'},
    {time: '25-02-2023T12:00:33.000Z', transactionId: '6421a49cfc828a7ab112450c', changedField: 'flag', userId: 'aneta.stankovska@yahoo.com'},
    {time: '30-02-2023T12:00:33.000Z', transactionId: '6421a4af8704a4794d3f248e', changedField: 'date', userId: 'aneta.stankovska@yahoo.com'},
    {time: '02-03-2023T12:00:33.000Z', transactionId: '6421a4b867c879d21d90e761', changedField: 'note', userId: 'aneta.stankovska@yahoo.com'},
    {time: '05-03-2023T12:00:33.000Z', transactionId: '6421a4be19387dd61389a5c2', changedField: 'flag', userId: 'aneta.stankovska@yahoo.com'},
    {time: '07-03-2023T12:00:33.000Z', transactionId: '6421a4c5ddaca1a44e6e7632', changedField: 'note', userId: 'aneta.stankovska@yahoo.com'},
    {time: '15-03-2023T12:00:33.000Z', transactionId: '6421a4cb425965daddb02c9b', changedField: 'date', userId: 'aneta.stankovska@yahoo.com'},
    {time: '20-03-2023T12:00:33.000Z', transactionId: '6421a4d0e1b301fff7c6b8c8', changedField: 'flag', userId: 'aneta.stankovska@yahoo.com'},
    {time: '24-03-2023T12:00:33.000Z', transactionId: '6421a4d68200af504cc246f7', changedField: 'note', userId: 'aneta.stankovska@yahoo.com'},
    {time: '27-03-2023T12:00:33.000Z', transactionId: '6421a4dd28adabd476dd7073', changedField: 'note', userId: 'aneta.stankovska@yahoo.com'}
  ]);

  public tableColumns = ['timeFrame', 'transaction', 'changedField', 'user']

  public filterComponentSettings;
  public filterFields = ['time_frame', 'transaction', 'changedField', 'user'];

  constructor() { }

  ngOnInit(): void {
  }  

}
