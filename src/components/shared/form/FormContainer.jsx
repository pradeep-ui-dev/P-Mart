import { Children } from "react";

const FormContainer = (props) => {
    const {children, onSubmit} = props
    return (
        <div className="container">
            <form action="" onSubmit={onSubmit} className="space-y-4">
                {children}
            </form>
        </div>
    )
}

export default FormContainer;