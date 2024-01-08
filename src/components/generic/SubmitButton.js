export default function SubmitButton({content, className = "btn btn-primary submitbutton", handleSubmit}){
    return (
        <button
            type="button"
            className={className}
            onClick={handleSubmit}
        >{content}</button>
    );
}