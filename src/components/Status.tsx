type StatusProps = {
    status : 'loading' | 'success' | 'failure'
}

const Status = (props : StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = 'Data is Loading....'
    }else if(props.status === 'success'){
        message = 'Data Fetched Successfully...'
    }else if(props.status === 'failure'){
        message = 'Data fetching Failed'
    }
  return (
    <div>Status : {message}</div>
  )
}

export default Status