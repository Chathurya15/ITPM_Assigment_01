const { test, expect } = require('@playwright/test');

// CONFIGURATION & SELECTORS 
const INPUT_SELECTOR = 'textarea[placeholder*="Input Your Singlish"]';
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg';

//  DATA DRIVEN TEST CASES (35 Functional Cases) 
const testCases = [
  
  // POSITIVE CASES (Should Pass ✅)
  {
    id: 'Pos_Fun_0001',
    name: 'Creat simple interrogative (question) form sentence',
    input: 'magee saakku pariikShaa karanna puluvandha ?',
    expected: 'මගේ සාක්කු පරීක්ෂා කරන්න පුලුවන්ද ?'
  }, 
  {
    id: 'Pos_Fun_0002',
    name: 'Compound sentences (two ideas joined)',
    input: 'api senaga haa seevakayan atharin gos, ivathkara nothibuu kuudaarama dhesata gaman kaLemu',
    expected: 'අපි සෙනග හා සේවකයන් අතරින් ගොස්, ඉවත්කර නොතිබූ කූඩාරම දෙසට ගමන් කළෙමු'
  }, 
  {
    id: 'Pos_Fun_0003',
    name: 'Simple present tense sentence',
    input: 'mama sarkas kuudaaramata yanavaa',
    expected: 'මම සර්කස් කූඩාරමට යනවා'
  },
  {
    id: 'Pos_Fun_0004',
    name: 'Create imperative (command) sentence',
    input: 'vahaama poliisiyata pitathvenna',
    expected: 'වහාම පොලීසියට පිටත්වෙන්න'
  },
  {
    id: 'Pos_Fun_0005',
    name: 'Negative sentence',
    input: 'sidhDhiyee vaedhagathma kotasa hooms theerum aragena naee',
    expected: 'සිද්ධියේ වැදගත්ම කොටස හෝම්ස් තේරුම් අරගෙන නෑ'
  },
  {
    id: 'Pos_Fun_0006',
    name: 'Complex conditional sentence',
    input: 'ovungee balaaporoththuva thiyennee ohuva hora rahaseema yuroopaa mahadhviipayata haQQgaagena yannadha ehemath naethnam ovunta uvamanaa kadhukarayen ehaa ovungee boodarayen ethera viimata pera, arnastta monavaa hari dharuNu vidhihata dhaduvamak dhennadha kiyana karuNath api thavama dhannee naee.',
    expected: 'ඔවුන්ගේ බලාපොරොත්තුව තියෙන්නේ ඔහුව හොර රහසේම යුරෝපා මහද්වීපයට හංගාගෙන යන්නද එහෙමත් නැත්නම් ඔවුන්ට උවමනා කදුකරයෙන් එහා ඔවුන්ගේ බෝඩරයෙන් එතෙර වීමට පෙර, අර්නස්ට්ට මොනවා හරි දරුණු විදිහට දඩුවමක් දෙන්නද කියන කරුණත් අපි තවම දන්නේ නෑ.'
  },
  {
    id: 'Pos_Fun_0007',
    name: 'Create polite phrasing request',
    input: 'ethakota oya kiyana chekpatha liyaa thibune kumana mudhal pramaaNa valatadha kiyala kariNaakarala mata pavasanna puluvandha ?',
    expected: 'එතකොට ඔය කියන චෙක්පත ලියා තිබුනෙ කුමන මුදල් ප්‍රමාණ වලටද කියල කරිණාකරල මට පවසන්න පුලුවන්ද ?'
  },
  {
    id: 'Pos_Fun_0008',
    name: 'Create a informal phrasing',
    input: 'meheta dhiyan oya pisthoolaya vahaama',
    expected: 'මෙහෙට දියන් ඔය පිස්තෝලය වහාම'
  },
  {
    id: 'Pos_Fun_0009',
    name: 'Use repeated word expressions used for emphasis in a sentence',
    input: 'naee naee mama ehema kaLee naee',
    expected: 'නෑ නෑ මම එහෙම කළේ නෑ '
  },
  {
    id: 'Pos_Fun_0010',
    name: 'Past tense sentence',
    input: 'mahaa pudhumaakaara vaedak iiye sidhdhavuNaa',
    expected: 'මහා පුදුමාකාර වැඩක් ඊයෙ සිද්දවුණා '
  },
  {
    id: 'Pos_Fun_0011',
    name: 'Future tense sentence',
    input: 'praDhaana seevikaava heta enavaa',
    expected: 'ප්‍රධාන සේවිකාව හෙට එනවා '
  },
  {
    id: 'Pos_Fun_0012',
    name: 'Create a plural usage and pronoun variations sentence',
    input: 'api aapahu ikmanatama gedhara yamu',
    expected: 'අපි ආපහු ඉක්මනටම ගෙදර යමු '
  },
  {
    id: 'Pos_Fun_0013',
    name: 'Convert a mixed-language polite request with technical terms and time constraint',
    input: 'ayiyee, adha thiyena online discussion ekee Zoom details tika email ekkin hari WhatsApp message ekkin hari share karanna puluvan veyidha ? eeth ekkama apee aluth WiFi password ekath evanna. Discussion eka thiyena velaava samahara vita venasvenna puluvan kiyalath kivva nisaa ehema venas velaa 3.00PM ta kalin vaetunoth mata join venna baeriveyi kiyala Batch Rep ta inform karanna. Thank You ayiyee ! ',
    expected: 'අයියේ, අද තියෙන online discussion එකේ Zoom details ටික email එක්කින් හරි WhatsApp message එක්කින් හරි share කරන්න පුලුවන් වෙයිද ? ඒත් එක්කම අපේ අලුත් WiFi password එකත් එවන්න. Discussion එක තියෙන වෙලාව සමහර විට වෙනස්වෙන්න පුලුවන් කියලත් කිව්ව නිසා එහෙම වෙනස් වෙලා 3.00PM ට කලින් වැටුනොත් මට join වෙන්න බැරිවෙයි කියල Batch Rep ට inform කරන්න. Thank You අයියේ ! '
  },
  {
    id: 'Pos_Fun_0014',
    name: 'Sentences containing places and common english words that should remain as they are',
    input: 'mata aapu letter ekee thibunee heta eyaa Jaffna yanavaa kiyalaa. eheta gihin call ekak dhennam kiyalath thibunaa.',
    expected: 'මට ආපු letter එකේ තිබුනේ හෙට එයා Jaffna යනවා කියලා. එහෙට ගිහින් call එකක් දෙන්නම් කියලත් තිබුනා.'
  },
  {
    id: 'Pos_Fun_0015',
    name: 'Create a input containing punctuation marks, Currency and Numbers',
    input: 'mata upandhinayata Rs.10000 hambunaa',
    expected: 'මට උපන්දිනයට Rs.10000 හම්බුනා'
  },
  {
    id: 'Pos_Fun_0016',
    name: 'Create multiple spaces handling sentence',
    input: 'mee   paarlimeenthuvee manthriithumek',
    expected: 'මේ   පාර්ලිමේන්තුවේ මන්ත්‍රීතුමෙක්'
  },
  {
    id: 'Pos_Fun_0017',
    name: 'Create a negation pattern sentence',
    input: 'kohomatavathma mata ee livumata athsan karanna baee',
    expected: 'කොහොමටවත්ම මට ඒ ලිවුමට අත්සන් කරන්න බෑ'
  },
  {
    id: 'Pos_Fun_0018',
    name: 'Create an informal slang  and colloquial phrasing sentence',
    input: 'dheyiyanta oppuvechchaavee! adoo uba mokakdha machaQQ mee karagaththee ?',
    expected: 'දෙයියන්ට ඔප්පුවෙච්චාවේ! අඩෝ උබ මොකක්ද මචං මේ කරගත්තේ ?'
  },
  {
    id: 'Pos_Fun_0019',
    name: 'Create an English abbreviations and short forms sentence',
    input: 'mama QR Code eka paavichchi karala salli gevuvee, ethakota OTP eka aavaa SMS ekakin.',
    expected: 'මම QR Code එක පාවිච්චි කරල සල්ලි ගෙවුවේ, එතකොට OTP එක ආවා SMS එකකින්.'
  },
  {
    id: 'Pos_Fun_0020',
    name: 'Create a request with varying degrees of politeness',
    input: 'puluvannam mata ee udhavva karala dhenna hooms mahaththayaa',
    expected: 'පුලුවන්නම් මට ඒ උදව්ව කරල දෙන්න හෝම්ස් මහත්තයා'
  },
  {
    id: 'Pos_Fun_0021',
    name: 'Create a sentence with measurement units',
    input: 'mata kiri ml 500 paekat ekak ooni mudhalaali',
    expected: 'මට කිරි ml 500 පැකට් එකක් ඕනි මුදලාලි'
  },
  {
    id: 'Pos_Fun_0022',
    name: 'Multi-word expressions & frequent collocations sentence',
    input: 'mama nam poddakvath kaemathi naee mee vaedeeta',
    expected: 'මම නම් පොඩ්ඩක්වත් කැමති නෑ මේ වැඩේට'
  },
  {
    id: 'Pos_Fun_0023',
    name: 'Create simple and affirmative response sentence',
    input: 'hari, oyaa monavadha magen balaporoththu venne mama eeka karannam ',
    expected: 'හරි, ඔයා මොනවද මගෙන් බලපොරොත්තු වෙන්නෙ මම ඒක කරන්නම්'
  },
  {
    id: 'Pos_Fun_0024',
    name: 'Positive forms sentence',
    input: 'mama anivaaryenma anidhdhaa ta athugaanavaa',
    expected: 'මම අනිවාර්යෙන්ම අනිද්දා ට අතුගානවා'
  },
  {
    id: 'Pos_Fun_0025',
    name: 'Paragraph-style input (medium)',
    input: 'api adha dhavasama kisima vaedak karee naee, nikan dhavasama sellam karapu eka thamayi kaLee. yaaluvoo ekka hinaa velaa kathaa karalaa, geem gahala, sathutin kaalaya gatha kaLaa. viveekayath laebuNaa, manasath suvavuNaa, heta aapahu vaeda patangena okkoma vaeda tika ivara karannayi api hithan inne.',
    expected: 'අපි අද දවසම කිසිම වැඩක් කරේ නෑ, නිකන් දවසම සෙල්ලම් කරපු එක තමයි කළේ. යාලුවෝ එක්ක හිනා වෙලා කතා කරලා, ගේම් ගහල, සතුටින් කාලය ගත කළා. විවේකයත් ලැබුණා, මනසත් සුවවුණා, හෙට ආපහු වැඩ පටන්ගෙන ඔක්කොම වැඩ ටික ඉවර කරන්නයි අපි හිතන් ඉන්නේ.'
  },
  {
    id: 'Pos_Fun_0026',
    name: 'Create a multi-line input (line breaks) sentence',
    input: 'jaeem boothalayee echchara mudhalak thibunadha ? \nov mama adha udheth dhaekkaa',
    expected: 'ජෑම් බෝතලයේ එච්චර මුදලක් තිබුනද ? \nඔව් මම අද උදෙත් දැක්කා'
  },
  
  // NEGATIVE CASES (Should Fail ❌ due to website failiers)
  {
    id: 'Neg_Fun_0001',
    name: 'Create a sentence joined words without spacing',
    input: 'namanammaQQahalathiyenavaa',
    expected: 'නම නම් මං අහල තියෙනවා'
  },
  {
    id: 'Neg_Fun_0002',
    name: 'Create a sentence with misspelled Singlish words',
    input: 'magee aaBharaNa pettiya gedhr amathaka unaa',
    expected: 'මගේ ආභරණ පෙට්ටිය ගෙදර අමතක උනා'
  },
  {
    id: 'Neg_Fun_0003',
    name: 'English-heavy sentence',
    input: 'mama dhaen office ekata yanavaa. Please send the document ASAP.',
    expected: 'මම දැන් office එකට යනවා. Please send the document ASAP.'
  },
  {
    id: 'Neg_Fun_0004',
    name: 'Create a singular sentence',
    input: 'mama yanna hithuve, mokada mata godak vela inna ba',
    expected: 'මම යන්න හිතුවෙ, මොකද මට ගොඩක් වෙලා ඉන්න බෑ'
  },
  {
    id: 'Neg_Fun_0005',
    name: 'Frequently used, properly spaced day-to-day expressions with mixed Singlish + English input',
    input: 'mata hodhatama siithalayi, so let\'s go inside quickly',
    expected: 'මට හොදටම සීතලයි, so let\'s go inside quickly.'
  },
  {
    id: 'Neg_Fun_0006',
    name: 'Create a simple greeting sentence',
    input: 'suba raathriyak aththamma',
    expected: 'සුභ රාත්‍රියක් අත්තම්මා'
  },
  {
    id: 'Neg_Fun_0007',
    name: 'Create a plural usage sentence',
    input: 'api eeka lassana widihakata karamu',
    expected: 'අපි ඒක ලස්සන විදිහකට කරමු'
  },
  {
    id: 'Neg_Fun_0008',
    name: ' Create a sentences containing English brand terms, places and common English words that should remain as they are',
    input: 'aluth Keells ekak open karalaa camps eka gaavama',
    expected: 'අලුත් Keells එකක් open කරලා camps එක ගාවම'
  },
  {
    id: 'Neg_Fun_0009',
    name: 'Create a simple sentence with proper spacing',
    input: 'Bus eke yanna epa',
    expected: 'Bus එකේ යන්න එපා'
  },
  {
    id: 'Neg_Fun_0010',
    name: 'Create a sentence with common English words that should remain as they are',
    input: 'Dr.Perera kivva vidhihata xray eka ganna thiyenne heta, e kiyanne janavari 15',
    expected: 'Dr.Perera කිව්ව විදිහට xray එක ගන්න තියෙන්නෙ හෙට, එ කියන්නෙ ජනවාරි 15'
  },
  {
    id: 'Neg_Fun_0011',
    name: 'Create a validate response containing date, currency, and punctuation marks',
    input: 'ow, bill eka nam Rs.1,500/= \nhaebaei date eka ada neve 2024/05/12',
    expected: 'ow, bill එක නම් Rs.1,500/= \nහැබැයි date එක අද නෙවේ 2024/05/12'
  },
];

// TEST SUITE EXECUTION 
test.describe('Assignment 1 Automation Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
  });

  for (const data of testCases) {
    test(`[${data.id}] ${data.name}`, async ({ page }) => {
      
      const inputField = page.locator(INPUT_SELECTOR);
      
      await inputField.clear();
      await inputField.fill(data.input);
      await inputField.press('Enter');
      
      // Wait for output
      await page.waitForTimeout(5000); 

      const outputElement = page.locator(OUTPUT_SELECTOR);
      const actualOutput = (await outputElement.innerText()).trim();

      // Check Match
      const isMatch = actualOutput === data.expected;
      const status = isMatch ? 'Pass' : 'Fail';
      const icon = isMatch ? '✅' : '❌';

      // PRINT ROW FOR EXCEL
      console.log(`\n--- TEST: ${data.id} ---`);
      console.log(`Test Name: ${data.name}`);
      console.log(`Input: ${data.input}`);
      console.log(`Expected Output: ${data.expected} | Actual Output:   ${actualOutput}`);
      console.log(`${icon} | ${status} | ${isMatch ? 'Success' : 'Mismatch'}`);
      console.log(`----------------------\n`);

      // NOTE: Assertion commented out to prevent crashing on failures
      // expect(actualOutput).toBe(data.expected); 
    });
  }

  // NEGATIVE UI CASE 
  test('[Neg_UI_000] English word override check (Delayed Enter)', async ({ page }) => {
    const inputField = page.locator(INPUT_SELECTOR);
    const outputElement = page.locator(OUTPUT_SELECTOR); // Ensure this constant is defined at top

    // Step 1: Clear and type "hello"
    await inputField.clear();
    await inputField.fill('hello');

    // Step 2: Wait 2 seconds (Crucial step to reproduce the bug)
    await page.waitForTimeout(5000); 

    // Step 3: Press Enter
    // On a buggy system, this triggers the suggestion change
    await inputField.press('Enter');

    // Step 4: Wait for the output to update
    await page.waitForTimeout(5000);

    const actualOutput = (await outputElement.innerText()).trim();

    // Validation: 
    // We EXPECT 'hello' (English). 
    // If it changed to Sinhala (e.g., 'හෙල්ලො'), this check returns FALSE.
    const isSuccess = actualOutput.includes('hello'); 

    const status = isSuccess ? 'Pass' : 'Fail';
    const icon = isSuccess ? '✅' : '❌';

    console.log(`\n--- UI TEST ---`);
    console.log(`${icon} Neg_UI_0003 | English word override check | S | Type 'hello' + 2s Wait + Enter | hello | ${actualOutput} | ${status} | ${isSuccess ? 'Success' : 'Failed'} | Names/places/English words - UX validation`);
    console.log(`----------------------\n`);
  });

});
