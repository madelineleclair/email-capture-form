import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent, render} from '@testing-library/react';
import EmailCaptureForm from "../src/index.jsx";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("header text", () => {
  it('renders the default header text if no prop provided', () => {
    const {getByText} = render(<EmailCaptureForm />);
    expect(getByText(/Sign up for our mailing list/i)).toBeTruthy();
  });

  it("renders the text from headerText prop if provided", () => {
    const headerText = "Sign up now!";
    const {getByText} = render(<EmailCaptureForm headerText={ headerText }/>);
    expect(getByText(headerText)).toBeTruthy();
  });
});

describe("success text", () => {
  it("renders the default success text if no prop provided", () => {
    const {getByText} = render(<EmailCaptureForm />);
    expect(getByText(/Thank you for subscribing/i)).toBeTruthy();
  });

  it("renders the text from successText prop if provided", () => {
    const successText = "Sign up successful";
    const {getByText} = render(<EmailCaptureForm successText={ successText }/>);
    expect(getByText(successText)).toBeTruthy();
  });
})

describe("first name error text", () => {
  it("renders the default text if no prop provided", () => {
    const {getByText} = render(<EmailCaptureForm showFirstNameError={true} />);
    expect(getByText("Please enter your first name")).toBeTruthy();
  });

  it("renders the text from firstNameError prop if provided", () => {
    const firstNameError = "Enter a valid name";
    const {getByText} = render(<EmailCaptureForm firstNameError={ firstNameError } showFirstNameError={true}/>);
    expect(getByText(firstNameError)).toBeTruthy();
  });
})

describe("form submission", () => {
  it("shows errors if email or name are not valid", () => {
    const {queryByText, getByText} = render(<EmailCaptureForm />);
    expect(queryByText("Please enter your first name")).toBeNull();
    expect(queryByText("Please enter a valid email")).toBeNull();
    fireEvent.click(getByText('Submit'))
    expect(queryByText("Please enter your first name")).toBeTruthy();
    expect(queryByText("Please enter a valid email")).toBeTruthy();
  })

  it("POSTS data to inputed url", () => {

  })
})

describe("errors", () => {
  it("hides email or name error on input field change", () => {

  })
})
