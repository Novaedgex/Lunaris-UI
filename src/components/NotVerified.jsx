const NotVerified = () => {
  return (
    <div className='w-full h-screen bg-(--lv-surface) flex'>
        <div className='m-auto w-max p-6 bg-(--lv-surface-2) border-(--lv-border-lit) border-2 rounded-lg text-center' style={{boxShadow: "var(--lv-glow-md)"}}>
            <h1 className='text-2xl font-bold mb-4 text-(--lv-text)'>Email Not Verified</h1>
            <p className=' mb-6 text-(--lv-text)'>Please check your email for a verification link.</p>
        </div>
    </div>
  )
}

export default NotVerified