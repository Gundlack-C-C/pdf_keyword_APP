import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { Text } from '../commons/models'
import { TextInputComponent } from '../commons/text/text-input/text-input.component';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent extends TextInputComponent implements OnInit {
  constructor(private wiki: WikiService) { super() }

  ngOnInit() {
    this.getRandom()
  }

  getRandom() {
    this.text = null;
    this.wiki.random().then((data: Text | null) => {
      this.TEXT = data;
      if(!data)
        console.error("Unable to get random wiki entry!")        
    })
  }

}
