import { EmailValidator } from "@angular/forms";

export class User{
    constructor(
        public FirstName: string,
        public LastName: string,
        public Email: EmailValidator,
        public Password: string,
      ) {  }

}