export function sayHello() {
  console.log('hello')
}

export function foo(param) {
  console.log('this is foo', param)
}

export function getAppId() {
  return process.env.PLUGIN_APPID
}