import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const Mail = () => {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("");
  const [message, setMessage] = useState(`
    <table style="background-color: #f9f9fb; width: 100%;" border="0">
      <tr>
        <td align="center">
          <table border="0" width="100%" style="max-width: 660px; width: 100%; background-color: #0b132c; border: 2px solid #eee; border-radius: 8px 8px 0 0; overflow: hidden" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 32px 8px 16px 64px;" width="50%">
              
                <div class="tiny-editable" style="font-family: 'helvetica', sans-serif; color: #fff; font-size: 16px; line-height: 1.5;">
                  <h1>Email creation made simple!</h1>
                </div>
              </td>
              <td style="padding: 16px 64px 16px 8px;" width="50%">
                <img src="images/sbc-email-cover.png" width="256" height="256" alt="">
              </td>
            </tr>
          </table>
          <table border="0" width="100%" style="max-width: 660px; width: 100%; background-color: #ffffff; border: 2px solid #eee; border-radius: 8px; overflow: hidden" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding: 16px 64px 0;" colspan="2">
                <div class="tiny-editable" style="font-family: 'helvetica', sans-serif; color: #243376;">
                  <p style="font-size: 20px; text-align: center;">Hey {{First.Name}},</p>
                  <p style="font-size: 20px; text-align: center;">What are you building?</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 8px 16px 64px;" width="50%">
                <div class="tiny-editable" style="font-family: 'helvetica', sans-serif; color: #243376;">
                  <p style="text-align: center;"><img src="images/sbc-email-webmail.png" alt="Illustration of an email" width="256" height="186"></p>
                  <p style="text-align: center;">An email client?<br><span style="color: rgb(149, 165, 166);"><em>i.e. the next Gmail</em></span></p>
                </div>
              </td>
              <td style="padding: 0 64px 16px 8px;" width="50%">
                <div class="tiny-editable" style="font-family: 'helvetica', sans-serif; color: #243376;">
                  <p style="text-align: center;"><img src="images/sbc-email-marketingemail.png" alt="Illustration of a marketing email" width="256" height="186"></p>
                  <p style="text-align: center;">Email marketing software?<em><br></em><span style="color: rgb(149, 165, 166);"><em>i.e. the next Mailchimp</em></span>
                  </div>
                </td>
              </tr>
              </tr>
            </table>
        </td>
      </tr>
    </table>
  `);
  const [footer, setFooter] = useState("");

  const handleEditorChange = (content, editor) => {
    setMessage(content);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Title:", title);
    console.log("Header:", header);
    console.log("Message:", message);
    console.log("Footer:", footer);
  };

  return (
    <div className="bg-[#e8e7e740] min-h-screen backdrop-blur-md rounded-lg flex" style={{ marginTop: '-50px' }}>
      <div className="w-full p-8">
        <div className="bg-white shadow rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex placeholder-white text-white justify-center" style={{ marginTop: '-50px' }}>
              <label className="block text-gray-700"></label>
              <input
                type="text"
                placeholder="Title"
                className="w-1/4 p-2 border bg-[#2B3990] placeholder-white border-gray-300 rounded"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2"></label>
              <input
                type="text"
                placeholder="Header"
                className="w-full bg-[#7C8BC7] placeholder-white text-white p-2 border border-gray-300 rounded"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                required
              />
            </div>
          
            <div className="mb-4">
              <label className="block text-gray-700 mb-2"></label>
              <Editor
                value={message}
                init={{
                  plugins: 'advcode advtemplate a11ychecker autocorrect autolink emoticons image inlinecss link linkchecker lists mergetags powerpaste tinymcespellchecker help',
                  toolbar: 'undo redo | aidialog aishortcuts | styles | bold italic forecolor | link image emoticons | align | mergetags inserttemplate | spellcheckdialog a11ycheck | code removeformat',
                  toolbar_sticky: true,
                  menubar: false,
                  editable_root: false,
                  editable_class: 'tiny-editable',
                  elementpath: false,
                  visual: false,
                  link_target_list: false,
                  link_list: [
                    { title: "Features", value: 'https://www.tiny.cloud/tinymce/features/' },
                    { title: "Docs", value: 'https://www.tiny.cloud/docs/tinymce/latest/' },
                    { title: "Pricing", value: 'https://www.tiny.cloud/pricing/' }
                  ],
                  object_resizing: false,
                  formats: {
                    h1: { block: 'h1', styles: { fontSize: '24px', color: '#335dff' } },
                    h2: { block: 'h2', styles: { fontSize: '20px' } },
                    largetext: { block: 'p', styles: { fontSize: '20px' } },
                    calltoaction: { selector: 'a', styles: { backgroundColor: '#335dff', padding: '12px 16px', color: '#ffffff', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' } }
                  },
                  style_formats: [
                    { title: 'Paragraph', format: 'p' },
                    { title: 'Heading 1', format: 'h1' },
                    { title: 'Heading 2', format: 'h2' },
                    { title: 'Large text', format: 'largetext' },
                    { title: 'Button styles' },
                    { title: 'Call-to-action', format: 'calltoaction' },
                  ],
                  ai_shortcuts: [
                    { title: 'Format as marketing email', prompt: 'Turn this content into an HTML-formatted marketing email in fixed-width and mobile-friendly table form, following screen width best practices' },
                    { title: 'Generate call to action', prompt: 'Generate an appropriate and short call to action for this email, in the form a button.' }
                  ],
                  images_file_types: "jpeg,jpg,png,gif",
                  spellchecker_ignore_list: ['i.e', 'Mailchimp', 'CSS-inlined'],
                  mergetags_list: [
                    {
                      title: "Contact",
                      menu: [
                        { value: 'Contact.FirstName', title: 'Contact First Name' },
                        { value: 'Contact.LastName', title: 'Contact Last Name' },
                        { value: 'Contact.Email', title: 'Contact Email' }
                      ]
                    },
                    {
                      title: "Sender",
                      menu: [
                        { value: 'Sender.FirstName', title: 'Sender First Name' },
                        { value: 'Sender.LastName', title: 'Sender Last name' },
                        { value: 'Sender.Email', title: 'Sender Email' }
                      ]
                    },
                    {
                      title: 'Subscription',
                      menu: [
                        { value: 'Subscription.UnsubscribeLink', title: 'Subscription Unsubscribe Link' }
                      ]
                    }
                  ]
                }}
                onEditorChange={handleEditorChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2"></label>
              <input
                type="text"
                placeholder="Footer"
                className="w-full bg-[#7C8BC7] placeholder-white text-white p-2 border border-gray-300 rounded"
                value={footer}
                onChange={(e) => setFooter(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center gap-8">
            <button type="submit" className="bg-blue-600 w-1/4 text-white px-4 py-2 rounded">Configure Workflow</button>
            <button type="button" className="bg-green-600 w-1/4 text-white px-4 py-2 rounded">fichier joint</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mail;
