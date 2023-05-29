import { Component, OnInit } from '@angular/core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConstant } from 'src/app/translate/translate-constant';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  iconEnvelope = faEnvelope;
  iconKey = faKey;
  listLang = TranslateConstant.LIST_LANG;
  currentLang? = '';

  constructor(
    private translateService: TranslateService
  ){

  }

  ngOnInit(): void {
    this.currentLang = this.translateService.getBrowserLang();
  }
}
