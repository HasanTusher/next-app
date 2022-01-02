

export default function NestedLayout({props}: any){
    return <div>
        <form>
            <div className="row">
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" placeholder="Last name"/>
                </div>
                <div className="col-4 text-center">
                    <button  className="btn btn-info" >Search</button>
                </div>
            </div>
        </form>
    </div>


}