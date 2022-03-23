import {View, ScrollView} from "react-native"
import React, {useState, useEffect} from 'react'
import Typeahead from './Typeahead';

const Fetch = () => {

  const [users, setUsers] = useState([])

  const fetching = async () => {
    const response = await fetch("https://api.github.com/users")
    .then((response) => response.json())

    setUsers(response)
  }

  useEffect(() => {
    fetching();
  }, [])

  return (
    <ScrollView>
      <View style={{flexWrap: "wrap", flexDirection: "row"}}>
        {
          users.map((user, index) => <Typeahead url={user.avatar_url} key={index} name={user.login} redirect={`https://github.com/${user.login}`}/>)
        }
      </View>
    </ScrollView>
  )
}

export default Fetch