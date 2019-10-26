export class GlobalQuote {
    constructor(
        public symbol: String,
        public price: String,
        public change: String,
        public changePercent: String,
        public hasIncreased: boolean
    ) {}
}