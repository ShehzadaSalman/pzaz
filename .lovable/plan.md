

## Contact Form API Integration

Update the ContactModal component to send form submissions to the real API endpoint instead of simulating them.

### Changes

**File: `src/components/ContactModal.tsx`**

Replace the simulated `setTimeout` submission with a real `fetch` POST request:

- **Endpoint**: `https://projector.pzaz.io/api/send_contact_us/`
- **Method**: POST with JSON body
- **Body fields**: `full_name`, `email`, `company_name`, `phone`, `message`
- Handle success (show toast, reset form, close modal) and error (show error toast) responses
- Keep existing validation (required: fullName, email, message)

### Technical Details

The `handleSubmit` function will be updated to:

```text
1. Validate required fields (existing logic)
2. Set submitting state
3. POST to https://projector.pzaz.io/api/send_contact_us/ with JSON body:
   {
     "full_name": form.fullName,
     "email": form.email,
     "company_name": form.companyName,
     "phone": form.phone,
     "message": form.message
   }
4. On success: toast success, reset form, close modal
5. On error: toast error message
6. Finally: set submitting to false
```

No new dependencies or backend changes required -- this is a simple client-side fetch call to an external API.

