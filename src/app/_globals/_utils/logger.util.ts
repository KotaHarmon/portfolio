export class LoggerService<T> {
  private _enabled: boolean;

  constructor(enabled: boolean) {
    this._enabled = enabled;
  }

  private GetLogObject = (message: string, data?: T) => {
    return {
      message,
      data,
    };
  };

  public debug = (message: string, data?: T) => {
    if (this._enabled) console.debug(this.GetLogObject(message, data));
  };

  public error = (message: string, data?: T) => {
    if (this._enabled) console.error(this.GetLogObject(message, data));
  };

  public info = (message: string, data?: T) => {
    if (this._enabled) console.info(this.GetLogObject(message, data));
  };

  public log = (message: string, data?: T) => {
    if (this._enabled) console.log(this.GetLogObject(message, data));
  };

  public warn = (message: string, data?: T) => {
    if (this._enabled) console.warn(this.GetLogObject(message, data));
  };
}

export default LoggerService;
