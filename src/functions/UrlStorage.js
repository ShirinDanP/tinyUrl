export class UrlStorage {
  static get() {
    const sessionStorageValue = sessionStorage.getItem('urls');

    let storage = [];

    if (sessionStorageValue) {
      storage = JSON.parse(sessionStorageValue);
    }

    return storage;
  }

  static set(values) {
    sessionStorage.setItem(
      'urls',
      JSON.stringify(
        Object.keys(values)
          .slice(-10)
          .map(key => ({ [key]: values[key] }))
      )
    );
  }
}
