import { Component, Input } from '@angular/core';
import { Program } from './program.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  @Input()
  program: Program;
}
