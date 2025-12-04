# AI Email Reply Generator

The **AI Email Reply Generator** is an intelligent application designed to streamline and automate the process of composing email responses using advanced natural language processing (NLP) models. With this tool, you can instantly generate relevant and context-aware replies, saving time and ensuring professionalism.

## Features

- **Automated Reply Generation:** Leverage AI to craft replies to incoming emails based on their content.
- **Customizable Tone and Style:** Choose from various response tones such as formal, friendly, concise, or detailed.
- **State-of-the-art NLP:** Powered by advanced language models for natural and coherent responses.
- **Privacy First:** Ensures user data and email contents are handled securely.
- **Easy Integration:** Can be connected with popular email clients/services.

## How It Works

1. **Input:** Paste or forward the content of the received email into the application.
2. **Select Preferences:** Pick desired tone, style, and length for the reply.
3. **Generate Reply:** The AI processes the email and generates an appropriate response.
4. **Edit & Send:** Review and optionally edit the AI-generated reply before sending.

## Use Cases

- Professionals managing high email volumes.
- Customer support teams seeking efficient, consistent replies.
- Individuals wanting to save time on routine email correspondence.

## Installation

Clone the repository:
```bash
git clone https://github.com/Sampath04-Isiam/AI_Email_Reply_Generator.git
cd AI_Email_Reply_Generator
```

### Prerequisites

- Java 21
- Maven installed
- ReactJS

## Setup and Configuration

1. **Set the Gemini API Key:**
   - Copy `config.example.properties` to `config.properties`.
   - Set your [Google Gemini API key](https://ai.google.dev/) in `config.properties`:
     ```
     gemini.api.key=YOUR_GEMINI_API_KEY
     ```
2. Configure your email provider credentials in `config.properties`.

## Build and Run

Build the Spring Boot application using Maven:
```bash
mvn clean install
```

Run the application:
```bash
mvn spring-boot:run
```

The application will start on the default port (`8080`). You can access the web UI (if available) or use the provided REST API to interact with the AI Email Reply Generator.

## Usage

- Send a POST request to `/api/generate-reply` with the following JSON payload:
  ```json
  {
    "emailContent": "Your email body here.",
    "tone": "formal"
  }
  ```
- The response will contain the AI-generated reply.

Or, follow the web UI instructions if present.

## Contribution

Contributions are welcome! Please open issues or submit pull requests to help improve the project.

## License

This project is licensed under the MIT License.

## Disclaimer

This project is intended for educational and productivity purposes. Always review auto-generated replies before sending.

---

**Created by [Sampath04-Isiam](https://github.com/Sampath04-Isiam)**
