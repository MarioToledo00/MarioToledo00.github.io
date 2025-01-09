import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DocsExampleComponent } from '@docs-components/public-api';
import {  TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective ,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormLabelDirective, FormCheckInputDirective, ButtonDirective, ThemeDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, DropdownDividerDirective, FormSelectDirective } from '@coreui/angular';






@Component({
  selector: 'app-user',
  imports: [TableDirective, TableColorDirective, TableActiveDirective, BorderDirective, AlignDirective,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective, FormLabelDirective, FormCheckInputDirective, ButtonDirective, ThemeDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink, DropdownDividerDirective, FormSelectDirective, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  data = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com', details: 'Detalles adicionales sobre Juan' },
    { id: 2, name: 'María López', email: 'maria@example.com', details: 'Detalles adicionales sobre María' },
    { id: 3, name: 'Carlos Ruiz', email: 'carlos@example.com', details: 'Detalles adicionales sobre Carlos' }
  ];

  expandedRow: number | null = null;

  toggleExpandRow(index: number): void {
    alert(index)
    this.expandedRow = this.expandedRow === index ? null : index;
  }

}
