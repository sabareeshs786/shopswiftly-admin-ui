export default function SubmitButton({content, className = "btn btn-primary submitbutton"}){
    return (
        <button
            type="submit"
            className={className}
        >{content}</button>
    );
}