
/**
 * 原作者: cbwfree<cbwfree@163.com>
 * 原链接: http://fly.layui.com/jie/4567/
 * 修订者: csersoft
 * 版本:  1.0.0
 */

declare module layui {
  type LayerCallbackSuccess = null | ((layero: JQuery, index: number) => void);
  type LayerCallbackYes = null | ((index: number, layero: JQuery) => boolean | void);
  type LayerCallbackCancel = null | ((index: number, layero: JQuery) => boolean | void);
  type LayerCallbackEnd = null | (() => void);
  type LayerCallbackFull = null | ((layero: JQuery) => void);
  type LayerCallbackMin = null | ((layero: JQuery) => void);
  type LayerCallbackRestore = null | ((layero: JQuery) => void);
  type LayerCallbackPrompt = null | ((value: string, index: number, elem: JQuery) => void);

  /**
   * Layer options
   */
  interface LayerOptions {
    type?: number;
    title?: string | boolean | string[];
    content?: string | HTMLElement | JQuery | string[];
    skin?: string;
    area?: string | string[];
    offset?: number | string | string[];
    icon?: number;
    btn?: string | string[];
    closeBtn?: string | boolean;
    shade?: string | boolean | (number | string)[];
    shadeClose?: boolean;
    time?: number;
    id?: string;
    anim?: number;
    isOutAnim?: boolean;
    maxmin?: boolean;
    fixed?: boolean;
    resize?: boolean;
    resizing?: Function;
    scrollbar?: boolean;
    maxWidth?: number;
    zIndex?: number;
    move?: string | boolean | HTMLElement;
    moveType?: boolean;
    moveOut?: boolean;
    moveEnd?: null | (() => void);
    tips?: number | (number | string)[];
    tipsMore?: boolean;
    success?: LayerCallbackSuccess;
    yes?: LayerCallbackYes;
    btn2?: LayerCallbackYes;
    btn3?: LayerCallbackYes;
    cancel?: LayerCallbackCancel;
    end?: LayerCallbackEnd;
    full?: LayerCallbackFull;
    min?: LayerCallbackMin;
    restore?: LayerCallbackRestore;
  }

  interface LayerConfigOptions extends LayerOptions {
    path?: string;
    extend?: string[];
  }

  interface LayerPromptOptions extends LayerOptions {
    formType?: number;
    value?: string;
    maxlength?: number;
    area?: string[];
  }

  interface LayerTabOptions extends LayerOptions {
    tab: ({ title: string, content: string })[];
  }

  interface LayerPhotosOptions extends LayerOptions {
    photos: LayerPhotosData | string;
    tab?: (pic: LayerPhotosDataItem, layero: JQuery) => void;
  }

  interface LayerPhotosData {
    title: string;
    id: number;
    start?: number;
    data: LayerPhotosDataItem[];
  }

  interface LayerPhotosDataItem {
    alt: string;
    pid?: number;
    src: string;
    thumb: string;
  }

  /**
   * Layer object
   */
  interface Layer {
    /**
     * 初始化全局配置
     * @param {LayerConfigOptions} options;
     */
    config(options: LayerConfigOptions): void;
    /**
     * 初始化就绪
     * @param {string} path
     * @param {Function} callback
     */
    ready(path: string, callback: () => void): void;
    /**
     * 初始化就绪
     * @param {Function} callback
     */
    ready(callback: () => void): void;
    /**
     * 原始核心方法
     * @param {LayerOptions} options
     */
    open(options?: LayerOptions): number;
    /**
     * 普通信息框
     * @param {string} content
     * @param {LayerOptions} options
     * @param {Function} yes
     */
    alert(content: string, options?: LayerOptions, yes?: LayerCallbackYes): number;
    /**
     * 普通信息框
     * @param {string} content
     * @param {Function} yes
     */
    alert(content: string, yes?: LayerCallbackYes): number;

    confirm(content: string, options?: LayerOptions, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

    confirm(content: string, yes?: LayerCallbackYes, cancel?: LayerCallbackCancel): number;

    msg(content: string, options?: LayerOptions, end?: LayerCallbackEnd): number;

    msg(content: string, end?: LayerCallbackEnd): number;

    load(icon?: number, options?: LayerOptions): number;

    tips(content: string, follow: string | this, options?: LayerOptions): number;

    close(index: number): void;

    closeAll(type?: 'dialog' | 'page' | 'iframe' | 'loading' | 'tips'): void;

    style(index: number, cssStyle: { [key: string]: string | number }): void;

    title(title: string, index: number): void;

    getChildFrame(selector: string, index: number): JQuery;

    getFrameIndex(windowName: string): number;

    iframeAuto(index: number): void;

    iframeSrc(index: number, url: string): void;

    setTop(layero: JQuery): void;

    full(): void;

    min(): void;

    restore(): void;

    prompt(options?: LayerPromptOptions, yes?: LayerCallbackPrompt): number;

    prompt(yes?: LayerCallbackPrompt): number;

    tab(options: LayerTabOptions): number;

    photos(options: LayerPhotosOptions): number;
  }

  interface TabOption {
    title: string;
    content: string;
    id: string;
  }

  interface Element {
    init(type?: string, filter?: string): void;
    on(filter: string, callback: (data: any) => any): void;
    tabAdd(filter: string, options: TabOption): void;
    tabDelete(filter: string, layid: string): void;
    tabChange(filter: string, layid: string): void;
    progress(filter: string, percent: string);
    render(type?: string, filter?: string): void;
  }

  interface LayFormData {
    elem?: HTMLElement;
    othis?: any;
    value?: string;
    form?: any;
    field?: any;
  }

  interface Form {
    on(event: string, callback: (data: LayFormData) => any): void;
    render(type?: string, filter?: string);
    verify(config: object);
  }

  interface PageOptions {
    elem: string | Object;
    count?: number;
    limit?: number;
    limits?: number[];
    curr?: number;
    groups?: number;
    prev?: string;
    next?: string;
    first?: string;
    last?: string;
    layout?: ['count' | 'prev' | 'page' | 'next' | 'limit' | 'skip'];
    theme?: string;
    hash?: string | boolean;
    jump?: (obj: PageOptions, first: boolean) => void;
  }

  interface Laypage {
    render(options: PageOptions): any;
  }

  interface DateParam {
    year?: number;
    month?: number;
    date?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  interface DateOption {
    elem?: string | HTMLElement;
    type?: 'year' | 'month' | 'date' | 'time' | 'datetime';
    range?: string | boolean;
    format?: string;
    value?: string | Date;
    min?: string;
    max?: string;
    trigger?: string;
    show?: boolean;
    position?: string;
    zIndex?: number;
    showBottom?: boolean;
    btns?: 'clear' | 'now' | 'confirm';
    lang?: 'cn' | 'en';
    theme?: string | 'default' | 'molv' | 'grid';
    calendar?: boolean;
    mark?: Object;
    ready?: (date: DateParam) => void;
    change?: (value: string, date: DateParam, endDate?: DateParam) => void;
    done?: (value: string, date: DateParam, endDate?: DateParam) => void;
  }

  interface Laydate {
    render(options: DateOption): Object;
    set(options: DateOption): void;
    getEndDate(month: number, year?: number): number;
  }

  interface Layui {
    layer?: Layer;
    element?: Element;
    form?: Form;
    laydate?: Laydate;
    laypage?: Laypage;
    use(mods: string | string[], callback: (...args: any[]) => any): any;
  }

  export let layer: Layer;
  export let element: Element;
  export let form: Form;
  export let laydate: Laydate;
  export let laypage: Laypage;

  export function use(mods: string | string[], callback: (...args: any[]) => any): any;
}
