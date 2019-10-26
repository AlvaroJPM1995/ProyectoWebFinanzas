import { Time } from "@angular/common";

export class Empresa {
        public symbol;
        public name;
        public type: String;
        public region: String;
        public marketOpen: Time;
        public marketClose: Time;
        public timezona: String;
        public currency: String;
        public matchScore: String;
}