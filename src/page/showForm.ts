import { html, render, TemplateResult } from 'lit-html';

function formTemplate (): TemplateResult {
  return html`
    <form id="highlighter-gatherer-form">

      <textarea 
        placeholder="Select Text on Page to Highlight"
        name="highlighter-gatherer-text"
        form="highlighter-gatherer-form"
        required="required"
      />

      <input
        type="url"
        name="url"
        placeholder="need to set VALUE as this page's URL, placeholder should never be shown..."
        required="required"
      />

      <textarea
        placeholder="Write down any notes, optional"
        name="highlighter-gatherer-notes"
        form="highlighter-gatherer-form"
      />

      <input type="submit"/>

    </form>`;
}

  export default function renderFormTemplate(parentId: string) {
    render(formTemplate(), document.getElementById(parentId)!);
  }