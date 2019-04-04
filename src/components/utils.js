export const autocomplete = (event, results) => {
    event = event.toLowerCase();
    if(event !==''){
      let name = results.filter(([id,element]) => {
        return element.name.toLowerCase().includes(event)
      });
      let surname = results.filter(([id,element]) => {
        return element.surname.toLowerCase().includes(event)
      });
      let role = results.filter(([id,element])=> {
        return element.role.toLowerCase().includes(event)
      });
      let username = results.filter(([id,element]) => {
        return element.username.toLowerCase().includes(event)
      });
      let result = role.concat(name,surname,username)
      result = [...new Set(result)]
      return result
    }
    return []
}