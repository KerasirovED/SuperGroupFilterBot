# SuperGroupFilterBot

SuperGroupFilterBot is a Telegram bot that filters messages in supergroups based on specific criteria. It helps maintain the quality of discussions by removing unwanted content or forwarding it to appropriate topics.

## Features

- **Internalization**: support for multiple languages.
  - Currently supports English and Russian.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/SuperGroupFilterBot.git
   ```

2. Install the required dependencies:

   ```bash
   cd SuperGroupFilterBot
   npm install
   ```

3. Configure the bot:

   - Create a new bot on Telegram and get the API token.
   - Rename `.env.example` to `.env` and specify your parameters there.

4. Run the bot:

   ```bash
   npm start
   ```

## Usage

- `/start` - get a welcome message

## Development flow

- I use feature branch for development and `main` branch for production.
- Once a new functionality is implemented, I test it locally first. I have a separate bot and a test supergroup for that. It works in polling mode.
- Once everything is fine, I push the changes to a feature branch, the code automatically gets pushed to AWS Lambda (dev function) and I test it in the test supergroup again.
- Once everything is fine, I create a PR to `main` branch. Once the PR is approved and merged, the code automatically gets pushed to AWS Lambda (production function) and the bot starts working in the production supergroup.
- I use GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/deploy-lambda.yml`.

The bots:
- Production bot: [@SuperGroupFilterBot](https://t.me/SuperGroupFilterBot)
- Development bot: [@SuperGroupFilterDevBot](https://t.me/SuperGroupFilterDevBot)
- Local bot: [@SuperGroupFilterLocalBot](https://t.me/SuperGroupFilterLocalBot)

Two development bots are needed because the bot works in two modes:
- Webhook mode for AWS Lambda (production and development bots).
- Polling mode for local development (local bot).

It is not convenient to switch between the modes, so I have two separate bots for that.

## TODO
- [x] Support two modes:
  - [x] Webhook mode for AWS Lambda.
  - [x] Polling mode for local development.
- [ ] Host it to AWS Lambda.
    - [ ] Create two functions:
        - [ ] Production function
        - [ ] Development function
    - [ ] Set up autodeployment from `main` and `dev` branches.
- [ ] Implement message forwarding rule based on sender.
    - [ ] The filtration is going to be implemented based on a user name first.
    - [ ] Needs to create an interface for managing the rules.
        - [ ] Implement a command for adding rules `/addfilter`. The command should:
            - [ ] Return a list of possible filter options as a keyboard buttons.
            - [ ] Once an option is selected, the bot should ask for a way to identify the messages to be filtered:
                - [ ] User ID
                - [ ] Username
            - [ ] Finally, a value for the rule must be received and stored.
    - [ ] Needs to store the rules somewhere. I think the DynamoDb is a good option. Anyway, it is going to be hosted in AWS Lambda.
    - [ ] Needs to implement the rule processing.
- [ ] I want to create a mini app for managing rules in the future.

## License

This project is licensed under the MIT License.