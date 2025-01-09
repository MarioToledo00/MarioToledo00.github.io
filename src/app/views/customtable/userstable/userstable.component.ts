import { Component, Input } from '@angular/core';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective } from '@coreui/angular';
import { CommonModule } from '@angular/common';
import { UserInterface } from '../../users/interface/user-interface';

@Component({
  selector: 'app-userstable',
  imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective,CommonModule],
  templateUrl: './userstable.component.html',
  styleUrl: './userstable.component.scss'
})
export class UserstableComponent {
  @Input() filter!:boolean;
  @Input() checkbox!:boolean;
  @Input() data:UserInterface[]|undefined;
}
