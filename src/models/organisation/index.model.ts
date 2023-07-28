export class OrganisationModel {
  private _email: string = 'emmajerry2016@gmail.com';
  private _phone: string = '+49152191222445';
  private _address: string = 'foo bar baz 1, Berlin Germany';

  public get email() {
    return this._email;
  }

  public get phone() {
    return this._phone;
  }

  public get address() {
    return this._address;
  }
}
