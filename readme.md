# SuperGroupFilterBot

SuperGroupFilterBot is a Telegram bot that filters messages in supergroups based on specific criteria. It helps maintain the quality of discussions by removing unwanted content or forwarding it to appropriate topics.

## Features

- **Internalization**: support for multiple languages.
  - Currently supports English and Russian.

## TODO
[] Host it to AWS Lambda.
    [] Create two functions:
        [] 1. Production function
        [] 2. Development function
    [] Set up autodeployment from `main` and `dev` branches.
[] Implement message forwarding rule based on sender.
    [] The filtration is going to be implemented based on a user name first.
    [] Needs to create an interface for managing the rules.
        [] Implement a command for adding rules `/addfilter`. The command should:
            [] Return a list of possible filter options as a keyboard buttons.
            [] Once an option is selected, the bot should ask for a way to identify the messages to be filtered:
                [] User ID
                [] Username
            [] Finally, a value for the rule must be received and stored.
    [] Needs to store the rules somewhere. I think the DynamoDb is a good option. Anyway, it is going to be hosted in AWS Lambda.
    [] Needs to implement the rule processing.
[] I want to create a mini app for managing rules in the future.

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
   - Rename `config.example.py` to `config.py` and add your API token.

4. Run the bot:

   ```bash
   npm start
   ```

## Usage

- `/start` - get a welcome message

## License

This project is licensed under the MIT License.