enum translateLang {
  EN = 'en',
  ID = 'id'
}

export class TranslateConstant {
  static DEFAULT_VALUE_LANG = translateLang.EN;

  static get LIST_LANG(): {value: translateLang, label: string}[]{
    return [
      {value: translateLang.EN, label: 'English'},
      {value: translateLang.ID, label: 'Indonesia'},
    ]
  }
}
