export class Quote {
    showDescription: boolean;
    constructor(public id: number, public quote: string, public author: string, public postedBy: string, public upvotes: number, public downvotes: number, public dayAdded: Date) {
      this.showDescription = false;
    }



}
