export const doOnEnter = (fun) => (event) => (event.key === "Enter") && fun()