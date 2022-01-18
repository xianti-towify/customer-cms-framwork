import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-cms-framework',
  templateUrl: 'customer-cms-framework.component.html',
  styleUrls: ['customer-cms-framework.component.scss']
})
export class CustomerCmsFrameworkComponent implements OnInit {
  @Input()
  style: string = '';

  ngOnInit(): void {}
}
