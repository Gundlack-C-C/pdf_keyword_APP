import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { Text } from '../commons/models'

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  text: Text | null  = null
  constructor(private wiki: WikiService) { }

  ngOnInit() {
    this.getRandom()
  }

  getRandom() {
    this.text = null;
    this.wiki.random().then((text: Text | null) => {
      this.text = text;
    })
  }

}
