import axios from 'axios'
import React, { useState } from 'react'

export const FileUpload = () => {
  // const [name, setname] = useState('')
  // const [file, setfile] = useState()
  // var is_check;
  

  // const submit=()=>{
  //     const formdata=new FormData()
  //     formdata.append("file",file);
  //     formdata.append("name",name)

  // }
  // const singlefileHandler = (e) => {
  //   console.log(e.target.files)
  //   var files=e.target.files
  //   var fileslength = e.target.files.length
  //   console.log(fileslength)
  //   for (var i = 0; i < fileslength; i++) {
  //     console.log(files[i].name)
  //     var str=files[i].name
  //     var arr=str.split(".");
      
  //     if(arr[arr.length-1]==="pdf"){
  //       console.log(str+" valid")
  //       // is_check=true
  //     }else{
  //       console.log(str+" invalid")
  //     }
  //   }
  //   // files.
  //   setfile(e.target.files[0])

  // }
  // return (
  //   <div>
  //     <form >
  //       <input type="file" name="file" id="file" onChange={(e) => { singlefileHandler(e) }} multiple />
        
  //       <input type="text" onChange={(e) => { setname(e.target.value) }} />
  //       {/* <input type="submit" value="Upload" /> */}
  //     </form>
  //   </div>
  // )

  const [name, setname] = useState('')
  const [file, setfile] = useState()
  const [mfile, setmfile] = useState([])

  const submit = (e)=>{
      e.preventDefault()
      const formData = new FormData()
      formData.append('file',file)
      formData.append('name',name)
      console.log(formData)

      axios.post('http://localhost:9999/upload',formData).then(res=>{

          console.log(res.data)
      })

  }
  const singlefileHandler = (e)=>{

      console.log(e.target.files);
      setfile(e.target.files[0])

  }
  

return (
  <div>
          <form onSubmit = {submit}>
              <input type="file" name="file" id="file" onChange = {(e)=>{singlefileHandler(e)}} multiple/>
              <input type = "text" onChange = {(e)=>{setname(e.target.value)}}/>
              <input type="submit" value="Upload" />
          </form>

  </div>
)
}
