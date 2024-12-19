// Load WAF environment at start
export async function loadWAFEnv () {
  window.AWS_WAF_ENV = {}
}

// Loads the AWS WAF JS API Script dynamically
export function loadScript () {
  if (document.getElementById('AwsWAFScript')) return

  const AwsWafScript = document.createElement('script')
  AwsWafScript.id = 'AwsWAFScript'
  AwsWafScript.async = false
  AwsWafScript.src = import.meta.env.VITE_URL2
  document.head.appendChild(AwsWafScript)
}
