export default function SubmitButton({content, className = "btn btn-primary submitbutton"}){
    return (
        <button
            type="submit"
            className={className}
            style={{margin: '10px 0'}}
        >{content}</button>
    );
}