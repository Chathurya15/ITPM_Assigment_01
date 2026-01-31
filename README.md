# 📘 ITPM Assignment 01 – Test Automation using Playwright

**Student ID:** IT23345478
**Module Code:** IT3040
**Module Name:** IT3040

## 📌 Project Overview

This repository contains an automated test suite developed for **ITPM Assignment 01** using **Playwright**.  
The purpose of this project is to validate the functionality of the **Swift Translator** web application, which converts **Singlish input into Sinhala text**.

The automation covers:
- Positive functional test cases
- Negative test cases
- Real-time UI update validation

All tests are written using **JavaScript with TypeScript checking enabled (`// @ts-check`)** to ensure better code quality and early error detection.

---

## ⚠️ Important Note for Evaluators
**Please Read Before Running:**

1.  **Negative Test Cases:** The assignment requires testing "Negative Scenarios" (inputs where the website *fails* to translate correctly).

2.  **The Result:** **In the HTML Report:** These tests will appear as **PASSED** (Green) because the automation script successfully *detected* the bug without crashing.

    * **In the Terminal (Console):** You will see **RED CROSSES (❌)**. This is **INTENTIONAL**. The Red Cross proves that the website output did *not* match the correct Sinhala translation and **Green ✅** proves that the test case PASSES in the Playwright HTML report.

---
## 🛠️ Step 1: Prerequisites
Before running the project, make sure the following software is installed on your system:
1.  **Node.js**: [Download Here](https://nodejs.org/) (Install the LTS version).
2.  **VS Code**: [Download Here](https://code.visualstudio.com/) (Recommended editor).

💡 After installing Node.js, verify installation by running:

```bash
node -v
npm -v
```

---

## 🚀 Step 2: Project Setup & Dependency Installation

Follow these steps carefully:
1.  **Download** this repository as a ZIP file 
2.  **Extract (Unzip)** the project folder to your computer
3.  Open **Visual Studio Code**.
4.  Go to **File → Open Folder** and select the extracted project folder.
5.  In VS Code, go to the top menu: **Terminal → New Terminal**.
6.  Paste the following commands into the terminal one by one and press **Enter**:

**Install Project Dependencies**
```bash
npm install
```

(Wait for the installation completes)

**Install Playwright Browsers**
```bash
npx playwright install
```

---

## 🏃‍♂️ Step 3: Run the Tests
You can run the tests using any of the following modes depending on your requirement. Choose the command that best fits your needs:

### 🌟 Option A: The "Evaluator Mode" (Recommended)
✔ Best for marking and demonstrations
✔ Runs tests one by one
✔ Browser opens visibly
✔ Terminal output is easy to follow and get a clean list of Green Ticks/Red Crosses in the terminal to compare with Excel.

```bash
npx playwright test --project=chromium --workers=1 --headed
```

### ⚡ Option B: The "Fast" Mode (Headless)
✔ Faster execution
✔ Runs tests in the background (Headless mode). 
❗Faster, but the terminal output might appear out of order.

```bash
npx playwright test
```

### ⚡ Option C: The "Visual" Parallel Mode
✔ Browser windows open
✔ Tests run in parallel
❗ Output may appear mixed

```bash
npx playwright test --headed
```

---

## 📊 Step 4: View the Detailed Report
After running the tests, if you want to see the full HTML summary:

```bash
npx playwright show-report
```

**Note:** If you get an error about "Port in use", try this instead:

```bash
npx playwright show-report --port 0
```

📝 Understanding the Terminal Output
When you run Option A, you will see results like this:

✅ **Pos_Fun_001: Pass** → The website translated correctly.

❌ **Neg_Fun_001: Mismatch** → SUCCESSFUL NEGATIVE TEST. The website failed to translate a complex phrase correctly, and our automation caught the bug.

---

## 🧰 Technologies Used

| Technology               | Purpose                    |
| ------------------------ | -------------------------- |
| Node.js                  | JavaScript runtime         |
| Playwright               | End-to-end test automation |
| JavaScript               | Test scripting             |
| TypeScript (`@ts-check`) | Static type checking       |
| VS Code                  | Development environment    |
| Git                      | Version control            |


---

## 📁 Project Structure

ITPM_ASSIGNMENT_01/
│
├── node_modules/              # Installed project dependencies (auto-generated)
│   ├── .bin/
│   ├── @playwright/
│   ├── @types/
│   ├── playwright/
│   ├── playwright-core/
│   └── undici-types/
│
├── playwright-report/         # Playwright HTML report output
│   ├── data/
│   └── index.html
│
├── test-results/              # Test execution artifacts & traces
│   ├── example-Assignment-1-Autom-*.zip
│   ├── example-Assignment-1-Autom-*.zip
│   ├── example-Assignment-1-Autom-*.zip
│   └── .last-run.json
│
├── tests/
│   └── example.spec.js        # Main Playwright test cases
│
├── .gitattributes             # Git configuration
├── .gitignore                 # Files ignored by Git
├── package.json               # Project metadata & dependencies
├── package-lock.json          # Dependency lock file
├── playwright.config.js       # Playwright test configuration
└── README.md                  # Project documentation

---

✅ **Conclusion**

This project demonstrates:

* Practical usage of Playwright for test automation

* Clear separation of positive and negative test scenarios

* Proper reporting and result interpretation

* Industry-standard test execution practices


---
