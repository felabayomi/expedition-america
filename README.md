This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Sheets Lead Capture Setup

The expression of interest form on `/events` posts to `/api/lead-interest`, which forwards
data to a Google Apps Script webhook URL.

### 1) Create a Google Sheet in `expeditionamericaus@gmail.com`

Create columns in row 1:

- `timestamp`
- `source`
- `fullName`
- `email`
- `cityOfInterest`
- `travelDates`
- `experienceType`
- `additionalNotes`

### 2) Add this Apps Script

Open Extensions -> Apps Script in that sheet and paste:

```javascript
function doPost(e) {
	var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	var data = JSON.parse(e.postData.contents);

	sheet.appendRow([
		data.timestamp || "",
		data.source || "",
		data.fullName || "",
		data.email || "",
		data.cityOfInterest || "",
		data.travelDates || "",
		data.experienceType || "",
		data.additionalNotes || ""
	]);

	return ContentService
		.createTextOutput(JSON.stringify({ ok: true }))
		.setMimeType(ContentService.MimeType.JSON);
}
```

Deploy as Web App:

- Execute as: `Me`
- Who has access: `Anyone`

Copy the Web App URL.

### 3) Configure environment variable

Create `.env.local` with:

```bash
GOOGLE_SHEETS_WEBHOOK_URL="YOUR_WEB_APP_URL"
```

Restart the Next.js server after changing env values.
