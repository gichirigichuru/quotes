import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0, "Every dog has it's day", "Unknown", "Amos", 0, 0, new Date(2019, 5, 11)),
  ];

  toggleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  upvoteQuote(index: number) {
    this.quotes[index].upvotes += 1;
  }

  downvoteQuote(index: number) {
    this.quotes[index].downvotes += 1;
  }

  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
