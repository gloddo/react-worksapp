export const autocomplete = (event, results) => {
    event = event.toLowerCase();
    if(event !=''){
      let name = results.filter(element => {
        return element.name.toLowerCase().includes(event)
      });
      let surname = results.filter(element => {
        return element.surname.toLowerCase().includes(event)
      });
      let role = results.filter(element=> {
        return element.role.toLowerCase().includes(event)
      });
      let username = results.filter(element => {
        return element.username.toLowerCase().includes(event)
      });
      let result = role.concat(name,surname,username)
      result = [...new Set(result)]
      return result
    }
    return []
}