# Synthetic Internal IT Support Handbook

**Dataset type:** Synthetic knowledge-base records\
**Version:** 1.0\
**Records:** 50\
**Purpose:** Demonstration and testing of an IT Support Agentic RAG
system

> **Important:** This is fictional sample content, not an approved
> organizational policy or operational procedure. Validate
> organization-specific details before production use. Do not invent
> internal URLs, contact numbers, SLAs, recovery timelines, or technical
> configurations.

## Dataset conventions

Each record is intended to be independently retrievable. Preserve its
ID, title, category, and keywords as metadata where possible. The agent
should state when the retrieved material does not contain an answer
rather than guessing.

------------------------------------------------------------------------

## HB-001 --- VPN purpose and scope

**Category:** VPN purpose and scope\
**Keywords:** vpn purpose and scope, IT support, troubleshooting, policy

### Guidance

Remote employees must use the approved company VPN before accessing
internal systems. A VPN connection authenticates the network tunnel but
does not grant additional application permissions.

### Recommended actions

Connect using the approved VPN client and corporate gateway. Confirm the
device is approved and that the employee has an active account. Test
only resources the employee is authorized to use.

### Escalation

Escalate when the employee cannot connect or is unsure whether a
resource requires VPN access.

### Example user question

-   Do I need VPN when working remotely?

------------------------------------------------------------------------

## HB-002 --- VPN client installation

**Category:** VPN client installation\
**Keywords:** vpn client installation, IT support, troubleshooting,
policy

### Guidance

The approved VPN client is distributed through the internal Software
Portal. Third-party installers and unofficial mirrors are not approved.

### Recommended actions

Open the Software Portal, search for the approved VPN client, verify the
displayed publisher and application name, and select Install. Follow
portal instructions and restart only if prompted.

### Escalation

Escalate if the client is missing from the portal, installation
repeatedly fails, or the publisher information looks unexpected.

### Example user question

-   Where can I download the VPN client?

------------------------------------------------------------------------

## HB-003 --- VPN connection procedure

**Category:** VPN connection procedure\
**Keywords:** vpn connection procedure, IT support, troubleshooting,
policy

### Guidance

VPN sign-in requires the employee's company email, password, MFA
completion, and selection of an available corporate gateway.

### Recommended actions

Confirm internet access; launch the approved client; enter company
credentials; complete MFA; select the closest available corporate
gateway; wait for Connected; test an authorized internal resource.

### Escalation

Escalate if credentials repeatedly fail, no gateway is listed, or a
security/certificate warning appears.

### Example user question

-   How do I connect to the company VPN?

------------------------------------------------------------------------

## HB-004 --- VPN no internet connectivity

**Category:** VPN no internet connectivity\
**Keywords:** vpn no internet connectivity, IT support, troubleshooting,
policy

### Guidance

A VPN connection requires working internet connectivity. If ordinary
websites fail before VPN is connected, troubleshoot the local network
first.

### Recommended actions

Disconnect VPN; check Wi-Fi or Ethernet; test ordinary internet access;
reconnect to a known working network if available; retry the approved
VPN client.

### Escalation

Escalate if the device has no connectivity across multiple known-working
networks.

### Example user question

-   VPN will not connect and websites also fail. What first?

------------------------------------------------------------------------

## HB-005 --- VPN client frozen

**Category:** VPN client frozen\
**Keywords:** vpn client frozen, IT support, troubleshooting, policy

### Guidance

An unresponsive VPN client may recover after a normal application
restart.

### Recommended actions

Close the client normally if possible; reopen it; sign in; complete MFA;
retry. Restart the device only through normal approved procedures and
after saving work.

### Escalation

Escalate if the client repeatedly freezes or crashes after restart.

### Example user question

-   The VPN application is frozen. What should I do?

------------------------------------------------------------------------

## HB-006 --- VPN gateway unavailable

**Category:** VPN gateway unavailable\
**Keywords:** vpn gateway unavailable, IT support, troubleshooting,
policy

### Guidance

A selected corporate gateway may be temporarily unavailable. Employees
may try another gateway offered inside the approved client.

### Recommended actions

Record the original gateway and error; disconnect; select another listed
corporate gateway; reconnect and test the required resource. Do not
enter an unfamiliar server address.

### Escalation

Escalate if all approved gateways fail or one gateway consistently
fails.

### Example user question

-   Can I select another VPN gateway?

------------------------------------------------------------------------

## HB-007 --- VPN connected but application unavailable

**Category:** VPN connected but application unavailable\
**Keywords:** vpn connected but application unavailable, IT support,
troubleshooting, policy

### Guidance

A Connected VPN status confirms a tunnel, not that every internal
application is available or that the user has permission.

### Recommended actions

Confirm VPN status; test another authorized internal resource; record
application name and full error; determine whether colleagues are
affected. Do not change routes or access controls.

### Escalation

Escalate to the application owner or Service Desk with the error and
scope.

### Example user question

-   VPN says connected but an internal app does not open.

------------------------------------------------------------------------

## HB-008 --- VPN repeated disconnections

**Category:** VPN repeated disconnections\
**Keywords:** vpn repeated disconnections, IT support, troubleshooting,
policy

### Guidance

Repeated drops may be associated with unstable local internet, Wi-Fi
changes, gateway interruption, or client issues.

### Recommended actions

Check whether internet also drops without VPN; note disconnection times;
restart the approved client; try another approved gateway; record the
network type.

### Escalation

Escalate if the issue persists across stable networks or blocks critical
work.

### Example user question

-   My VPN disconnects repeatedly. What should I collect?

------------------------------------------------------------------------

## HB-009 --- VPN MFA prompt missing

**Category:** VPN MFA prompt missing\
**Keywords:** vpn mfa prompt missing, IT support, troubleshooting,
policy

### Guidance

A missing MFA prompt may relate to notification settings, connectivity,
unavailable authenticator, or account enrollment.

### Recommended actions

Check device connectivity; open the authenticator app directly if
supported; use a registered hardware key if available; do not approve
unexpected prompts.

### Escalation

Escalate if no registered factor is available or prompts remain missing.

### Example user question

-   I enter my password but receive no MFA prompt.

------------------------------------------------------------------------

## HB-010 --- VPN security restrictions

**Category:** VPN security restrictions\
**Keywords:** vpn security restrictions, IT support, troubleshooting,
policy

### Guidance

Employees must not disable endpoint security, antivirus, host firewall,
device management, or other protective controls to force VPN
connectivity.

### Recommended actions

Stop if a troubleshooting step asks to disable security, install an
unknown driver, or run an unknown script. Capture the error safely and
contact IT.

### Escalation

Immediately escalate suspicious instructions, security warnings, or
suspected compromise.

### Example user question

-   Can I turn off the firewall to fix VPN?

------------------------------------------------------------------------

## HB-011 --- VPN ticket evidence

**Category:** VPN ticket evidence\
**Keywords:** vpn ticket evidence, IT support, troubleshooting, policy

### Guidance

A useful VPN ticket includes employee identifier, device asset tag if
available, client version if visible, network type, selected gateway,
timestamp, exact error, and actions attempted.

### Recommended actions

Attach a screenshot only after checking it contains no password, MFA
code, token, QR code, or unrelated confidential information.

### Escalation

Escalate through the normal Service Desk route; indicate business impact
accurately.

### Example user question

-   What should I include in a VPN ticket?

------------------------------------------------------------------------

## HB-012 --- VPN on public Wi-Fi

**Category:** VPN on public Wi-Fi\
**Keywords:** vpn on public wi-fi, IT support, troubleshooting, policy

### Guidance

Public Wi-Fi should be treated as untrusted. Remote employees must
follow company device-security rules and use the approved VPN before
accessing internal systems.

### Recommended actions

Prefer a trusted network when available; keep the device physically
secure; connect with the approved VPN; do not accept unexpected
certificate warnings or install profiles from strangers.

### Escalation

Contact IT if an unexpected certificate warning appears or the device
reports a security issue.

### Example user question

-   Can I use hotel or airport Wi-Fi?

------------------------------------------------------------------------

## HB-013 --- Password minimum length

**Category:** Password minimum length\
**Keywords:** password minimum length, IT support, troubleshooting,
policy

### Guidance

The supplied sample policy requires company passwords to contain at
least 14 characters. Passwords must remain private and unique.

### Recommended actions

Use a long password not reused from personal services. Follow the
identity portal's current validation rules. Never place passwords in
tickets, chats, documents, or screenshots.

### Escalation

Contact the Service Desk if a password meeting the stated requirement is
rejected.

### Example user question

-   How long must my company password be?

------------------------------------------------------------------------

## HB-014 --- Password self-service reset

**Category:** Password self-service reset\
**Keywords:** password self-service reset, IT support, troubleshooting,
policy

### Guidance

Normal password resets should be completed through the self-service
identity portal.

### Recommended actions

Navigate to the known official portal using a saved company link or
intranet; follow verification prompts; create a compliant password; sign
in again to approved services.

### Escalation

Escalate if the portal is unavailable or identity verification fails.

### Example user question

-   How do I reset my company password?

------------------------------------------------------------------------

## HB-015 --- Forgotten password recovery

**Category:** Forgotten password recovery\
**Keywords:** forgotten password recovery, IT support, troubleshooting,
policy

### Guidance

A forgotten password should be handled through the approved self-service
recovery process. IT must verify identity before assisting further.

### Recommended actions

Use the official portal; follow recovery prompts; do not ask a colleague
to use their account; never disclose the old password to support staff.

### Escalation

Contact the Service Desk if self-service recovery fails or the account
cannot be identified.

### Example user question

-   I forgot my password and cannot recover it.

------------------------------------------------------------------------

## HB-016 --- Failed login threshold

**Category:** Failed login threshold\
**Keywords:** failed login threshold, IT support, troubleshooting,
policy

### Guidance

Under the supplied sample policy, an account may be temporarily locked
after five failed login attempts. The lockout duration is not specified.

### Recommended actions

Stop repeated attempts once locked; verify account name and keyboard
layout; use approved self-service recovery if available.

### Escalation

Escalate if lockout persists or attempts were not initiated by the
employee.

### Example user question

-   How many failed attempts can lock my account?

------------------------------------------------------------------------

## HB-017 --- Locked account

**Category:** Locked account\
**Keywords:** locked account, IT support, troubleshooting, policy

### Guidance

An account may be temporarily locked after five failed attempts.
Employees must not bypass lockout using another person's account.

### Recommended actions

Use an approved self-service unlock/recovery option if offered.
Otherwise contact the Service Desk with account identifier and
approximate lockout time; do not provide the password.

### Escalation

Escalate immediately if the employee did not make the failed attempts or
suspects compromise.

### Example user question

-   My account is locked. What next?

------------------------------------------------------------------------

## HB-018 --- Never share credentials

**Category:** Never share credentials\
**Keywords:** never share credentials, IT support, troubleshooting,
policy

### Guidance

Employees must never share passwords with colleagues, managers, or
support personnel. IT should use approved tools and identity
verification.

### Recommended actions

Refuse requests for passwords, MFA codes, recovery codes, or
authenticator approvals. Record suspicious requests and report them
through the security channel.

### Escalation

Immediately report any credential disclosure or suspected theft.

### Example user question

-   An IT technician asked for my password. Should I share it?

------------------------------------------------------------------------

## HB-019 --- Suspicious password reset message

**Category:** Suspicious password reset message\
**Keywords:** suspicious password reset message, IT support,
troubleshooting, policy

### Guidance

Unexpected reset messages may be phishing attempts. Links and phone
numbers in suspicious messages should not be trusted.

### Recommended actions

Do not click links or open attachments. Navigate independently to the
known portal. Report the message. If credentials were entered, contact
Security immediately.

### Escalation

Escalate immediately if credentials were entered or an unexpected MFA
request was approved.

### Example user question

-   I received a password reset email I did not request.

------------------------------------------------------------------------

## HB-020 --- Password changed but sign-in fails

**Category:** Password changed but sign-in fails\
**Keywords:** password changed but sign-in fails, IT support,
troubleshooting, policy

### Guidance

Some applications may retain an old session or cached credential after a
password change.

### Recommended actions

Sign out and back in using the new password at the official sign-in
page. Avoid entering credentials into unexpected prompts. Record which
applications fail.

### Escalation

Escalate if multiple services reject the new password or suspicious
sign-in alerts appear.

### Example user question

-   I changed my password but VPN still rejects it.

------------------------------------------------------------------------

## HB-021 --- MFA scope

**Category:** MFA scope\
**Keywords:** mfa scope, IT support, troubleshooting, policy

### Guidance

MFA is mandatory for email, VPN, cloud administration, and other
protected company systems.

### Recommended actions

Complete the configured second factor when prompted. Use only an
enrolled company authenticator app or registered hardware key. Deny
prompts not initiated by you.

### Escalation

Contact the Service Desk if MFA is not configured or a protected service
lacks the expected challenge.

### Example user question

-   Which systems require MFA?

------------------------------------------------------------------------

## HB-022 --- Approved MFA methods

**Category:** Approved MFA methods\
**Keywords:** approved mfa methods, IT support, troubleshooting, policy

### Guidance

The supplied policy approves the company authenticator app and
registered hardware security keys. SMS is permitted only when explicitly
enabled as a recovery method.

### Recommended actions

Use an already registered factor. Keep hardware keys secure. Do not
enroll a device in response to an unsolicited call or message.

### Escalation

Escalate if all factors are unavailable or an unknown factor appears on
the account.

### Example user question

-   Which MFA methods are approved?

------------------------------------------------------------------------

## HB-023 --- Authenticator enrollment

**Category:** Authenticator enrollment\
**Keywords:** authenticator enrollment, IT support, troubleshooting,
policy

### Guidance

Authenticator enrollment must occur through the official identity portal
or an IT-approved workflow. Enrollment QR codes and codes are sensitive.

### Recommended actions

Open the official enrollment page; verify the site; follow the steps;
complete the test challenge. Never send enrollment QR codes to support
by email or chat.

### Escalation

Contact IT if enrollment fails or displayed account details are
unfamiliar.

### Example user question

-   How do I register the authenticator app?

------------------------------------------------------------------------

## HB-024 --- Lost or replaced MFA phone

**Category:** Lost or replaced MFA phone\
**Keywords:** lost or replaced mfa phone, IT support, troubleshooting,
policy

### Guidance

Losing or replacing a phone used for MFA may prevent approval of sign-in
requests.

### Recommended actions

Use another already registered factor if available. Otherwise contact
the Service Desk for identity-verified recovery. Report the phone loss
if it contained company data or was managed.

### Escalation

Escalate promptly if no approved factor remains or the phone may be
accessed by another person.

### Example user question

-   I have a new phone and cannot access MFA.

------------------------------------------------------------------------

## HB-025 --- Unexpected MFA request

**Category:** Unexpected MFA request\
**Keywords:** unexpected mfa request, IT support, troubleshooting,
policy

### Guidance

An MFA prompt the employee did not initiate may indicate someone is
attempting to access the account.

### Recommended actions

Deny the request; do not share codes; do not approve repeated prompts.
Report the time and application shown. Follow Security instructions for
password changes.

### Escalation

Immediately notify Security or the Service Desk about unexpected or
repeated prompts.

### Example user question

-   I keep receiving MFA requests I did not initiate.

------------------------------------------------------------------------

## HB-026 --- Hardware security key

**Category:** Hardware security key\
**Keywords:** hardware security key, IT support, troubleshooting, policy

### Guidance

Registered hardware keys are an approved MFA method. The key must remain
under the employee's control.

### Recommended actions

Use the registered key only with the legitimate company sign-in flow.
Verify the account and site before approving. Do not lend the key.

### Escalation

Contact IT if the key is lost, damaged, unrecognized, or requested by an
unfamiliar application.

### Example user question

-   My security key is not recognized.

------------------------------------------------------------------------

## HB-027 --- SMS MFA recovery

**Category:** SMS MFA recovery\
**Keywords:** sms mfa recovery, IT support, troubleshooting, policy

### Guidance

SMS is not a default primary MFA method under the supplied sample
policy. It may be used only if explicitly enabled as recovery.

### Recommended actions

Prefer the authenticator app or registered hardware key. If SMS recovery
appears, verify it is part of the official identity workflow and the
phone number is correct.

### Escalation

Contact the Service Desk if SMS is the only option but is not enabled.

### Example user question

-   Can I receive MFA codes by SMS?

------------------------------------------------------------------------

## HB-028 --- MFA device change

**Category:** MFA device change\
**Keywords:** mfa device change, IT support, troubleshooting, policy

### Guidance

Changing a phone, key, or account profile may affect MFA enrollment.
Factors should be changed only through approved workflows.

### Recommended actions

Before removing a working factor, confirm another approved factor is
available or follow official re-enrollment instructions.

### Escalation

Escalate if the employee is locked out or sees a factor they did not
register.

### Example user question

-   What should I do before changing my MFA device?

------------------------------------------------------------------------

## HB-029 --- Software approved source

**Category:** Software approved source\
**Keywords:** software approved source, IT support, troubleshooting,
policy

### Guidance

Business software must be installed only from the company Software
Portal.

### Recommended actions

Search the portal; verify application name and publisher; select the
approved installation option; follow instructions. Avoid third-party
download sites.

### Escalation

Contact IT if the application is missing, installation fails, or the
listing appears suspicious.

### Example user question

-   Where should I download company software?

------------------------------------------------------------------------

## HB-030 --- Software not listed

**Category:** Software not listed\
**Keywords:** software not listed, IT support, troubleshooting, policy

### Guidance

Software absent from the portal requires manager approval and IT
security review before installation.

### Recommended actions

Submit application name, publisher, version, business purpose, requested
features, and business justification. Wait for approval and installation
instructions.

### Escalation

Escalate business-critical requests through the software-request
process.

### Example user question

-   The application I need is not in the portal.

------------------------------------------------------------------------

## HB-031 --- Administrator rights

**Category:** Administrator rights\
**Keywords:** administrator rights, IT support, troubleshooting, policy

### Guidance

Administrator access is not granted simply to install unapproved
applications.

### Recommended actions

Do not use another person's admin credentials or privilege workarounds.
Submit an approved software request and explain the business need.

### Escalation

Escalate if an approved application requires elevated installation
privileges.

### Example user question

-   Can IT give me admin rights to install software?

------------------------------------------------------------------------

## HB-032 --- Software installation failed

**Category:** Software installation failed\
**Keywords:** software installation failed, IT support, troubleshooting,
policy

### Guidance

Installation can fail because of low storage, incompatibility, pending
restart, network interruption, or package issues.

### Recommended actions

Record application, version, device, error, and time. Confirm available
storage and network. Retry only through the Software Portal if its
instructions indicate it is safe.

### Escalation

Escalate repeated failures or security, certificate, or compatibility
warnings.

### Example user question

-   The approved software installation failed.

------------------------------------------------------------------------

## HB-033 --- Software updates

**Category:** Software updates\
**Keywords:** software updates, IT support, troubleshooting, policy

### Guidance

Business software updates should use the Software Portal or managed
update mechanism.

### Recommended actions

Save work; follow the update prompt; keep the device on power and a
stable network where appropriate; restart when requested. Do not
indefinitely postpone security updates.

### Escalation

Contact IT if updates repeatedly fail or cause an application outage.

### Example user question

-   How should I update company software?

------------------------------------------------------------------------

## HB-034 --- Untrusted installer warning

**Category:** Untrusted installer warning\
**Keywords:** untrusted installer warning, IT support, troubleshooting,
policy

### Guidance

An unknown publisher, unexpected security warning, or request to bypass
OS protection is a reason to stop.

### Recommended actions

Cancel installation; do not approve unknown prompts; capture the warning
safely; report the application and warning to IT Security.

### Escalation

Immediately escalate if the installer was run or malware is detected.

### Example user question

-   The installer says publisher unknown. Should I continue?

------------------------------------------------------------------------

## HB-035 --- Software license request

**Category:** Software license request\
**Keywords:** software license request, IT support, troubleshooting,
policy

### Guidance

Approval of an application does not automatically approve every license
tier, add-on, or use case.

### Recommended actions

Provide application, publisher, edition, number of users, business
owner, and purpose. Wait for approval before purchasing or installing.

### Escalation

Escalate unclear licensing or payment questions to software asset
management/procurement.

### Example user question

-   Can I buy a software license myself?

------------------------------------------------------------------------

## HB-036 --- Lost laptop immediate report

**Category:** Lost laptop immediate report\
**Keywords:** lost laptop immediate report, IT support, troubleshooting,
policy

### Guidance

A lost or stolen company laptop must be reported immediately to the IT
Service Desk and the employee's manager.

### Recommended actions

Use an approved reporting channel. Provide asset tag if available, last
known location, approximate time, and whether the device was locked. Do
not delay reporting while searching.

### Escalation

Treat suspected theft, exposure, or an unlocked missing device as an
urgent security incident.

### Example user question

-   I lost my company laptop. Who do I contact?

------------------------------------------------------------------------

## HB-037 --- Lost laptop incident details

**Category:** Lost laptop incident details\
**Keywords:** lost laptop incident details, IT support, troubleshooting,
policy

### Guidance

The initial report should include asset tag if available and last known
location. Time last seen and device state are also useful.

### Recommended actions

Provide factual details and label estimates as estimates. Do not include
passwords, recovery codes, or confidential data in ordinary ticket text.

### Escalation

Contact the Service Desk even if the asset tag is unavailable; do not
delay the report.

### Example user question

-   What details are needed for a missing laptop report?

------------------------------------------------------------------------

## HB-038 --- Lost laptop lock or wipe

**Category:** Lost laptop lock or wipe\
**Keywords:** lost laptop lock or wipe, IT support, troubleshooting,
policy

### Guidance

IT will initiate device lock or wipe procedures as appropriate and
coordinate with Security.

### Recommended actions

Report the incident and remain available. Do not independently locate,
access, lock, or wipe the device unless explicitly instructed through an
approved process.

### Escalation

Escalate to Security if sensitive information may be exposed.

### Example user question

-   Will IT lock or wipe my missing laptop?

------------------------------------------------------------------------

## HB-039 --- Do not self-recover lost laptop

**Category:** Do not self-recover lost laptop\
**Keywords:** do not self-recover lost laptop, IT support,
troubleshooting, policy

### Guidance

Employees must not attempt to remotely recover a lost or stolen laptop
themselves.

### Recommended actions

Provide last known location and circumstances to IT, manager, and
Security. Do not confront anyone or attempt unauthorized tracking.

### Escalation

Escalate immediately if theft or physical safety concerns exist.

### Example user question

-   I can see my laptop location. Should I retrieve it?

------------------------------------------------------------------------

## HB-040 --- Lost laptop possible exposure

**Category:** Lost laptop possible exposure\
**Keywords:** lost laptop possible exposure, IT support,
troubleshooting, policy

### Guidance

A missing laptop may expose company information, particularly if
unlocked or if sensitive files are stored locally.

### Recommended actions

Tell IT whether it was locked, whether encryption was known to be
enabled, whether sensitive files were open or stored locally, and
whether it was shared. Do not investigate remotely.

### Escalation

Security assesses exposure and determines incident response.

### Example user question

-   My lost laptop was unlocked. Is this a security incident?

------------------------------------------------------------------------

## HB-041 --- Other lost company devices

**Category:** Other lost company devices\
**Keywords:** other lost company devices, IT support, troubleshooting,
policy

### Guidance

The supplied policy specifically addresses laptops. Other managed
devices should be reported through the organization's asset-loss and
security process.

### Recommended actions

Report device type, asset identifier, location, time, and whether it
contained company information. Follow IT/Security instructions.

### Escalation

Escalate if the device can access company email, VPN, or sensitive data.

### Example user question

-   I lost a company phone or tablet.

------------------------------------------------------------------------

## HB-042 --- Clear support ticket

**Category:** Clear support ticket\
**Keywords:** clear support ticket, IT support, troubleshooting, policy

### Guidance

A useful ticket describes one issue clearly and provides context for
diagnosis.

### Recommended actions

Include concise title, affected service, device, time, exact error,
business impact, scope, troubleshooting attempted, and safe screenshot
if useful. Never include passwords or MFA codes.

### Escalation

Escalate major outages and suspected security incidents through the
urgent incident process.

### Example user question

-   What makes a good IT support ticket?

------------------------------------------------------------------------

## HB-043 --- Ticket follow-up

**Category:** Ticket follow-up\
**Keywords:** ticket follow-up, IT support, troubleshooting, policy

### Guidance

Use the existing ticket reference when following up. Duplicate tickets
can fragment investigation history.

### Recommended actions

Add new evidence, timestamps, affected users, or changed symptoms to the
existing ticket. State clearly if impact increases.

### Escalation

Escalate if impact materially changes or the published response target
is missed.

### Example user question

-   Should I open another ticket if IT has not replied?

------------------------------------------------------------------------

## HB-044 --- Screenshots and sensitive data

**Category:** Screenshots and sensitive data\
**Keywords:** screenshots and sensitive data, IT support,
troubleshooting, policy

### Guidance

Screenshots can expose credentials, MFA codes, tokens, personal
information, or confidential business data.

### Recommended actions

Capture only the relevant error area; redact secrets with an approved
method; review the image before attaching. Never send passwords or MFA
codes.

### Escalation

Report any sensitive information already shared through an unauthorized
channel to Security.

### Example user question

-   Can I attach a screenshot of my login error?

------------------------------------------------------------------------

## HB-045 --- Remote work device security

**Category:** Remote work device security\
**Keywords:** remote work device security, IT support, troubleshooting,
policy

### Guidance

Remote work does not remove the need to protect company devices,
credentials, and displayed information.

### Recommended actions

Keep the device physically secure; lock the screen when unattended; use
approved networks and VPN; apply managed updates; do not lend devices to
unauthorized people.

### Escalation

Report loss, suspected compromise, malware alerts, or unexpected
security changes.

### Example user question

-   How do I secure my company laptop at home?

------------------------------------------------------------------------

## HB-046 --- Suspected malware

**Category:** Suspected malware\
**Keywords:** suspected malware, IT support, troubleshooting, policy

### Guidance

Unexpected malware alerts, unknown remote-control software, or
suspicious device behavior may indicate a security incident.

### Recommended actions

Stop interacting with suspicious files; do not forward them; note alert
text and time; follow incident-reporting instructions. Do not disable
protective tools.

### Escalation

Immediately contact Security or the Service Desk.

### Example user question

-   My endpoint security tool detected a threat.

------------------------------------------------------------------------

## HB-047 --- Phishing report

**Category:** Phishing report\
**Keywords:** phishing report, IT support, troubleshooting, policy

### Guidance

Messages requesting credentials, MFA approval, payment, urgent action,
or unexpected attachments may be phishing.

### Recommended actions

Do not click, open, reply, or provide credentials. Use the approved
phishing-reporting method. If a link was opened or credentials entered,
state that clearly.

### Escalation

Immediately escalate credential entry, executed attachments, or
unexpected MFA approval.

### Example user question

-   I clicked a suspicious email link.

------------------------------------------------------------------------

## HB-048 --- Application access request

**Category:** Application access request\
**Keywords:** application access request, IT support, troubleshooting,
policy

### Guidance

Access is based on approved business need and assigned permissions. VPN
connectivity does not grant application access.

### Recommended actions

Submit application, role, permission, business justification, and
required manager/data-owner approval. Do not borrow another employee's
account.

### Escalation

Escalate to application owner or access-management team if approved
access is missing.

### Example user question

-   VPN works but the application says access denied.

------------------------------------------------------------------------

## HB-049 --- Widespread outage or individual issue

**Category:** Widespread outage or individual issue\
**Keywords:** widespread outage or individual issue, IT support,
troubleshooting, policy

### Guidance

The number of affected users helps distinguish a local issue from a
service incident.

### Recommended actions

Record service, number or groups affected, locations, start time, and
status-dashboard notices. Avoid creating duplicate reports
unnecessarily.

### Escalation

Escalate widespread outages through incident management rather than
treating each report as unrelated.

### Example user question

-   Several employees cannot access the same service.

------------------------------------------------------------------------

## HB-050 --- Stop unsafe troubleshooting

**Category:** Stop unsafe troubleshooting\
**Keywords:** stop unsafe troubleshooting, IT support, troubleshooting,
policy

### Guidance

Stop when a proposed step disables security, bypasses authentication,
uses another person's credentials, installs unapproved software, changes
protected settings, or deletes evidence.

### Recommended actions

Record current state and error; avoid repeating risky actions; contact
Service Desk or Security through the approved route.

### Escalation

Immediately escalate suspected compromise, data exposure, lost devices,
or security-control bypass instructions.

### Example user question

-   When should I stop troubleshooting?

------------------------------------------------------------------------

## Dataset usage notes

-   The password minimum of 14 characters and five-failed-attempt
    lockout threshold are values from the supplied sample policy, not
    universal security standards.
-   The sample does not define a lockout duration, support contact
    details, ticket SLAs, or internal portal URLs. The RAG agent must
    not fabricate them.
-   Keep source attribution and document metadata attached to retrieved
    chunks.
-   Use these synthetic articles for retrieval demonstrations; validate
    all operational guidance before real deployment.
